import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatting'
})
export class FormattingPipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return '';

    // Convert newline characters to <br> tags
    let formattedText = value.replace(/\n/g, '<br/>');

    // Apply text formatting based on markers
    formattedText = this.applyTextFormatting(formattedText);

    return formattedText;
  }

  private applyTextFormatting(text: string): string {
    if (text.startsWith('##')) {
      return `<h2>${text.substring(2)}</h2>`;
    }

    if (text.startsWith('**') && text.endsWith('**')) {
      return `<h3>${text.substring(2, text.length - 2)}</h3>`;
    }

    if (text.startsWith('* **') && text.endsWith('* **')) {
      return `<p>${text.substring(3, text.length - 3)}</p>`;
    }

    return text; // Return original text if no transformation applies
  }

}