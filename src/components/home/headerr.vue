<template>
    <div class="flex justify-between p-2 bg-white lg:p-5 fixed w-full z-50">
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-two" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <p>Ewunet communication</p>
        </div>

        <!-- left header section -->
        <div class="flex items-center justify-between">
            <div class="flex">

                <router-link to="./sign_in"
                    class="pl-5 pr-5  bg-gradient-to-r from-[#B67B46] to-[#82460A] text-white pt-1 pb-1 rounded-xl">
                    join
                </router-link>&nbsp;
                <button
                    class="pl-5 pr-5 bg-gradient-to-r from-[#B67B46] to-[#82460A] pt-1 pb-1  text-white  rounded-xl">
                    sign in</button>
            </div>


            <!-- mobile navbar -->

            <!-- end mobile navbar -->
        </div>
        <!-- right header section -->

    </div>

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
export default {

}
</script>

<style>
</style>