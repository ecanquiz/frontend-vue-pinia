<script setup>
import { reactive } from "vue"
import BaseInput from "@/components/BaseInput.vue"


const form =  reactive({
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      terms: false,
})

</script>

<template>
      <!--jet-authentication-card-->
        <!--template #logo>
            <jet-authentication-card-logo />
        </template-->

        <!--jet-validation-errors class="mb-4" /-->

        <form @submit.prevent="submit">
            <div>
                    <BaseInput
                      type="text"
                      label="Nombre"
                      name="name"
                      v-model="form.name"
                      autocomplete="Name"
                      placeholder="Name"
                      class="mb-2"
                    />
                <!--label for="name" value="Nombre">
                <input id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name" />
                </label-->
            </div>

            <div class="mt-4">
                <BaseInput
                  type="email"
                  label="Correo Electrónico"
                  name="email"
                  v-model="form.email"
                  autocomplete="email"
                  placeholder="email@domain.ext"      
                  class="mb-2"
                  data-testid="email-input"      
                />
                <!--label for="email" value="Correo Electrónico">
                <input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required />
                </label-->
            </div>

            <div class="mt-4">
               <BaseInput
                  type="password"
                  label="Contraseña"
                  name="password"
                  v-model="form.password"
                  autocomplete="password"
                  placeholder="password"      
                  class="mb-2"
                  data-testid="password-input"      
                /> 


                <!--label for="password" value="Contraseña">
                <input id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password" />
                </label-->
            </div>

            <div class="mt-4">
                <BaseInput
                  type="password"
                  label="Confirmación de Contraseña"
                  name="password_confirmation"
                  v-model="form.password_confirmation"
                  autocomplete="password confirmation"
                  placeholder="password confirmation"      
                  class="mb-2"
                  data-testid="password_confirmation-input"      
                />
                <!--label for="password_confirmation" value="Confirmar Contraseña">
                <input id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password" />
                </label-->                
            </div>

            <!--div class="mt-4" v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature"-->
                     <div class="mt-4" v-if="true">

                <label for="terms">
                    <div class="flex items-center">
                        <!--checkbox name="terms" id="terms" v-model:checked="form.terms" /-->

                        <div class="ml-2">
                            I agree to the <a target="_blank" href="/terms.show" class="underline text-sm text-gray-600 hover:text-gray-900">Terms of Service</a> and <a target="_blank" href="/policy.show" class="underline text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
                        </div>
                    </div>
                </label>
            </div>

            <div class="flex items-center justify-between mt-4">
                <a href="/login" class="underline text-sm text-gray-600 hover:text-gray-900">
                    ¿Ya registrado?
                </a>

                <button class="ml-4 btn btn-primary" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Registrarse
                </button>
            </div>
        </form>
    <!--/jet-authentication-card-->
</template>
