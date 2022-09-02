import Button from "@/components/button";

export default function FooterForm() {
  return (
    <form className="my-6">
      <h3 className="font-medium my-2">SIGN UP FOR JINTERROS NEWSLETTER</h3>
      <div className="form-group my-2">
        <input
          type="email"
          placeholder="Your Email Address"
          className="bg-white border-0 py-2 px-6 hover:rounded-0"
          required
        />
        <Button
          type="submit"
          text="SUBSCRIBE"
          className="bg-black text-white font-bold py-2 px-6"
        />
        <p className="text-xs font-light mt-1">
          By clicking the SUBSCRIBE button, you are agreeing to our
          <span className="text-underline text-gray-500 ml-1">
            Privacy & Cookie Policy
          </span>
        </p>
      </div>
    </form>
  );
}
