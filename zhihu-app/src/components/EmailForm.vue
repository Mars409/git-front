<template>
  <div class="email-form">
    <input v-model="localMail.to" placeholder="Email To" class="input-field" />
    <input
      v-model="localMail.subject"
      placeholder="Subject"
      class="input-field"
    />
    <textarea
      v-model="localMail.body"
      placeholder="Content"
      class="textarea-field"
    ></textarea>
    <button @click="send" class="send-button">Send</button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const localMail = reactive({
  to: "2081765286@qq.com",
  subject: "这是我的邮件标题！！！",
  body: "这是我的邮件内容！",
});

const emit = defineEmits(["send"]);

const send = () => {
  emit("send", localMail);
};
</script>

<style scoped>
.email-form {
  background: #f7f7f7;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
}

.input-field,
.textarea-field {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.textarea-field {
  height: 100px;
  resize: none;
}

.send-button {
  background-color: #5cb85c;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #4cae4c;
}
</style>
