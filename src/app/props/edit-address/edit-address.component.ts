import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Address } from 'src/app/data-model/address';
import { UserService } from 'src/app/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  @Output() closePopup = new EventEmitter();
  @Input() address: Address;
  addressForm: FormGroup;
  errorMessage;

  constructor(private userService: UserService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.addressForm = new FormGroup({
      fullname: new FormControl((this.address) ? this.address.fullname : ''),
      phone: new FormControl((this.address) ? this.address.phone : ''),
      streetAddress: new FormControl((this.address) ? this.address.streetAddress : ''),
      city: new FormControl((this.address) ? this.address.city : ''),
      county: new FormControl((this.address) ? this.address.county : ''),
    });
  }

  saveAddress(): void {
    if (this.addressForm.valid) {
      this.userService.db.collection('users')
      .doc(this.userService.currentUser.uid)
      .set({ address: this.addressForm.value }, {merge: true})
      .then(
        () => {
          this.closePopup.emit();
          this.snackbar.open('address saved', 'Dismiss', { duration: 1000 });
        }
        );
    }
  }

}
