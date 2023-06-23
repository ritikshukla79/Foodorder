import {AbstractControl,ValidationErrors } from "@angular/forms";
   
export class CustomerrorsValidators{
    static nospace(control:AbstractControl):ValidationErrors| null{
        if((control.value as String).includes(" "))
        {
            return {nospace:true}
        }
        
        return (null);
    } 
    //#Phonenumbercheck
    static check(control:AbstractControl):ValidationErrors| null{
        if((control.value as string).length<10 || (control.value as string).includes(" ")){
          return {check:true}
        }
        return (null);
    }
    // #passwordcheck
    static valid(control:AbstractControl):ValidationErrors| null{
       if((control.value as string).includes('@'||'#'||'$'||'&')){
        return {valid:false}
       }        
       return {valid:true};
    }
    
    
}