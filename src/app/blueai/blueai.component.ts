import { Component } from '@angular/core';
import { GoogleGenerativeAI} from '@google/generative-ai';
@Component({
  selector: 'app-blueai',
  templateUrl: './blueai.component.html',
  styleUrls: ['./blueai.component.scss']
})
export class BlueaiComponent {
   

// Access your API key as an environment variable (see "Set up your API key" above)
//  messages: { text: string, sender: 'user' | 'ai' }[] = [
//   { text: 'Hello! How can I assist you today?', sender: 'ai' }
// ];
API_KEY: any = "AIzaSyCjB7ylHTSf9Mioik8VqAj0JHFoboZWF_M";
genAI = new GoogleGenerativeAI(this.API_KEY);
prompt: any = '';

main = {
  sender: [{ text: "Here, You can see your prompt" }],
  gptreply: [{ text: "Hello, How can I assist you." }]
};

async run() {
  const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const result = await model.generateContent(this.prompt);
  const response = await result.response;
  const messages = response.text();

  this.main.sender.push({ text: this.prompt });
  this.main.gptreply.push({ text: messages });

  this.prompt = ''; // Clear the prompt
}
}


