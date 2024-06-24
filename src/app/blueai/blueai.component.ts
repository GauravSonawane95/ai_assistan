import { Component } from '@angular/core';
import { GoogleGenerativeAI} from '@google/generative-ai';
@Component({
  selector: 'app-blueai',
  templateUrl: './blueai.component.html',
  styleUrls: ['./blueai.component.scss']
})
export class BlueaiComponent {
   API_KEY:any= "AIzaSyCjB7ylHTSf9Mioik8VqAj0JHFoboZWF_M";

// Access your API key as an environment variable (see "Set up your API key" above)
 genAI = new GoogleGenerativeAI(this.API_KEY);
 prompt:any=[];
 sender:string[]=[];
 messages: { text: string, sender: 'user' | 'ai' }[] = [
  { text: 'Hello! How can I assist you today?', sender: 'ai' }
];

gptreply:string[]=[];

 async run() {

  const genAI = new GoogleGenerativeAI(this.API_KEY);
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  const result = await model.generateContent(this.prompt);
  const response = await result.response;
  const messages = response.text();
  console.log(messages);
  this.gptreply.push(messages);
  this.sender.push(this.prompt);
  

}


}



