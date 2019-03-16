package validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class PasswordValidator implements ConstraintValidator<PasswordValidate, String> {
    
    private String pattern;
    
    @Override
    public void initialize(PasswordValidate a) {
        pattern = "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}";
    }
    
    @Override
    public boolean isValid(String valor, ConstraintValidatorContext context) {
      return valor.matches(pattern);
    }
    
}
