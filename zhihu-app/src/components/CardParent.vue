<template>
    <div>
        <Card>
            <template #header>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus eveniet, aspernatur labore dolorum cum tempore sequi nostrum corporis deleniti autem laborum unde necessitatibus ipsam ut porro! Nobis, iusto necessitatibus!
                </p>
            </template>

            <p>这是中间的插槽</p>

            <template #footer>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus eveniet, aspernatur labore dolorum cum tempore sequi nostrum corporis deleniti autem laborum unde necessitatibus ipsam ut porro! Nobis, iusto necessitatibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus eveniet, aspernatur labore dolorum cum tempore sequi nostrum corporis deleniti autem laborum unde necessitatibus ipsam ut porro! Nobis, iusto necessitatibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus eveniet, aspernatur labore dolorum cum tempore sequi nostrum corporis deleniti autem laborum unde necessitatibus ipsam ut porro! Nobis, iusto necessitatibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus possimus eveniet, aspernatur labore dolorum cum tempore sequi nostrum corporis deleniti autem laborum unde necessitatibus ipsam ut porro! Nobis, iusto necessitatibus!
                </p>
            </template>
        </Card>
    </div>
</template>

<script setup lang="ts">
import Card from './Card.vue';
</script>

<style scoped>

</style>
