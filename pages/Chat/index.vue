<script setup>
        definePageMeta({
          title: "Chat",
        });
      </script>
      <template>
        <div>
          <div >
            <rs-card v-for="message in messages" :key="message.id" class="p-4">
              {{ message.text }}
            </rs-card>
            
          </div>
          <FormKit type="text" label="Ask ChatGPT" v-model="inputText" help="It may take some time to load the answer"/>
          <rs-button @click="sendMessage">Enter</rs-button>
        </div>
      </template>
      
      <script>
      import axios from 'axios';
      
      export default {
        data() {
          return {
            messages: [],
            inputText: ''
          };
        },
        methods: {
          async sendMessage() {
            if (!this.inputText) return;
      
            // Send request to ChatGPT API
            const response = await axios.post(
              'https://api.openai.com/v1/chat/completions',
              {
                model: 'gpt-3.5-turbo',
                messages: [
                  { role: 'system', content: 'You are ChatGPT, a large language model trained by OpenAI.' },
                  { role: 'user', content: this.inputText }
                ]
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer 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'
                }
              }
            );
      
            // Process the response
            const reply = response.data.choices[0].message.content;
            this.messages.push({ id: Date.now(), text: reply });
      
            // Clear input
            this.inputText = '';
          }
        }
      };
      </script>
      