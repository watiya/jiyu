import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "src/components/shadcn-ui/Default-Ui/input-otp";


const OtpInputCode = () => {
  return (
    <>
      <div className='mt-4'>
        <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      </div>
    </>
  )
}

export default OtpInputCode