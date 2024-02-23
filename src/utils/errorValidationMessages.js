const en = [
    { fieldName: 'phone', errorMessage: 'Invalid phone number format' },
    { fieldName: 'logo', errorMessage: 'Only one logo file is allowed.' },
    { fieldName: 'email', errorMessage: 'Invalid email address format' },
    { fieldName: 'name', errorMessage: 'Name must be at least 3 characters long' },
    { fieldName: 'password', errorMessage: 'Password is required' },
    { fieldName: 'token', errorMessage: 'Token is required' },
    { fieldName: 'otpSecret', errorMessage: 'OTP Secret is required' },
    { fieldName: 'newPassword', errorMessage: 'Password must be at least 8 characters long' },
    { fieldName: 'confirmPassword', errorMessage: 'Password does not match' },
    { fieldName: 'image', errorMessage: 'Only one image file is allowed.' },
    { fieldName: 'name', errorMessage: 'Name is required.' },
    {
        fieldName: 'answers',
        errorMessage: 'Answers must be an array.',
        subfields: {
            title: 'Answer title is required.',
            rate: 'Answer rate must be a number.'
        }
    },
    { fieldName: 'title', errorMessage: 'Title is required.' },
    { fieldName: 'duration', errorMessage: 'Duration must be a number.' },
    { fieldName: 'description', errorMessage: 'Description is required.' },
    { fieldName: 'position', errorMessage: 'Position is required.' },
    { fieldName: 'gender', errorMessage: 'Gender must be a string.' },
    { fieldName: 'birthDate', errorMessage: 'Birth date must be a valid date.' },
    { fieldName: 'primary_position', errorMessage: 'Primary position must be a string.' },
    { fieldName: 'secondary_position', errorMessage: 'Secondary position must be a string.' },
    { fieldName: 'skills', errorMessage: 'Skills must be an array and should contain at least one item.' },

];

const ar = [
    { fieldName: 'phone', errorMessage: 'صيغة رقم الهاتف غير صالحة' },
    { fieldName: 'logo', errorMessage: 'صيغة الملف المسموح بها هي شعار واحد فقط.' },
    { fieldName: 'email', errorMessage: 'صيغة البريد الإلكتروني غير صالحة' },
    { fieldName: 'name', errorMessage: 'يجب أن يكون الاسم على الأقل 3 أحرف' },
    { fieldName: 'password', errorMessage: ' كلمة المرور مطلوبة' },
    { fieldName: 'token', errorMessage: 'مطلوب رمز' },
    { fieldName: 'otpSecret', errorMessage: 'مطلوب OTPSecret' },
    { fieldName: 'newPassword', errorMessage: 'يجب أن تكون كلمة المرور على الأقل 8 أحرف' },
    { fieldName: 'confirmPassword', errorMessage: 'كلمة المرور غير متطابقة' },
    { fieldName: 'image', errorMessage: 'صيغة الملف المسموح بها هي صورة واحدة فقط.' },
    { fieldName: 'name', errorMessage: 'الاسم مطلوب.' },
    {
        fieldName: 'answers',
        errorMessage: 'الإجابات يجب أن تكون مصفوفة.',
        subfields: {
            title: 'عنوان الإجابة مطلوب.',
            rate: 'معدل الإجابة يجب أن يكون رقمًا.'
        }
    },
    { fieldName: 'title', errorMessage: 'العنوان مطلوب.' },
    { fieldName: 'duration', errorMessage: 'المدة يجب أن تكون رقمًا.' },
    { fieldName: 'description', errorMessage: 'الوصف مطلوب.' },
    { fieldName: 'position', errorMessage: 'الموقف مطلوب.' },
    { fieldName: 'gender', errorMessage: 'يجب أن يكون  صحيح.' },
    { fieldName: 'birthDate', errorMessage: 'يجب أن يكون تاريخ الولادة تاريخًا صحيحًا.' },
    { fieldName: 'primary_position', errorMessage: 'يجب أن يكون الموقف الأساسي سلسلة.' },
    { fieldName: 'secondary_position', errorMessage: 'يجب أن يكون الموقف الثانوي سلسلة.' },
    { fieldName: 'skills', errorMessage: 'يجب أن تكون المهارات مصفوفة وتحتوي على عنصر واحد على الأقل.' },

];


module.exports = {
    en,
    ar,
};
