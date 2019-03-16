package validator;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class SerialValidator implements ConstraintValidator<SerialValidate, String> {
    
    private String pattern;
    
    @Override
    public void initialize(SerialValidate a) {
        pattern = "^[a-zA-Z]{2}\\-\\d{4}$";
    }
    
    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
      return value.matches(pattern);
    }
    
}
