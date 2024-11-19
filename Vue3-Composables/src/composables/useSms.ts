import { ref, watch, onUnmounted } from 'vue';

interface SmsState {
  to: string;
  content: string;
  sent: boolean;
}

export function useSms() {
  const smsState = ref<SmsState>({ to: '', content: '', sent: false });

  const sendSms = () => {
    if (smsState.value.to && smsState.value.content.trim()) {
      smsState.value.sent = true;
      console.log(`Sending SMS to ${smsState.value.to}: ${smsState.value.content}`);
    } else {
      console.log('Please enter a valid phone number and message.');
    }
  };

  const resetSms = () => {
    smsState.value = { to: '', content: '', sent: false };
  };

  watch(smsState, (newSmsState) => {
    if (newSmsState.sent) {
      console.log(`Message sent to ${newSmsState.to}: ${newSmsState.content}`);
    }
  });

  onUnmounted(() => {
    // Perform any cleanup if necessary
  });

  return { smsState, sendSms, resetSms };
}