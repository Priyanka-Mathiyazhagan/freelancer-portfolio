import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact as ContactService } from '../../services/contact';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Contact {
  contactForm!: FormGroup;
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, public contactService: ContactService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      subject: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],

      message: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });
  }

  get name(): FormControl {
    return this.contactForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.contactForm.get('email') as FormControl;
  }

  get subject(): FormControl {
    return this.contactForm.get('subject') as FormControl;
  }

  get message(): FormControl {
    return this.contactForm.get('message') as FormControl;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';

    const payload = this.contactForm.value;

    this.contactService.sendMessage(payload).subscribe({
      next: (response) => {
        console.log('Message sent successfully:', response);
        this.successMessage = '✅ Message sent successfully!';
        this.contactForm.reset();
        this.isSubmitting = false;
        this.errorMessage = '';
        this.hideMessageAfterDelay();
      },
      error: () => {
        this.errorMessage = 'Failed to send message.';
        this.successMessage = '';
        this.isSubmitting = false;
      }
    });
  }

  hideMessageAfterDelay() {
    setTimeout(() => {
      this.successMessage = '';
      this.cdRef.detectChanges();
    }, 3000);
  }
}
