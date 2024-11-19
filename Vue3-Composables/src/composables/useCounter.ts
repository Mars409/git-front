import { ref } from "vue";

export function useCounter(initValue = 0){

    const count = ref<number>(initValue)

    const increament = () => {
        count.value++;
        }
    const decreament = () => {
            count.value--;
            }    
       return{
        count,increament,decreament
       }     
}