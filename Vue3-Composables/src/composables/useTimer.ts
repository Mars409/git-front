import { ref, watch, onUnmounted } from 'vue';

export function useTimer(initialDuration: number = 60) {
  const time = ref(initialDuration);
  let timerId: ReturnType<typeof setInterval> | null = null;

  const start = () => {
    if (timerId) {
      clearInterval(timerId);
    }
    timerId = setInterval(() => {
      if (time.value > 0) {
        time.value--;
      } else {
        stop();
        console.log('倒计时结束');
      }
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerId as number);
    timerId = null;
  };

  const reset = (duration: number = initialDuration) => {
    stop();
    time.value = duration;
  };

  onUnmounted(() => {
    stop();
  });

  return { time, start, stop, reset };
}