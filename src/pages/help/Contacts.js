import { Form, redirect, useActionData } from "react-router-dom";

const Contacts = () => {
  const data = useActionData();

  return (
    <div className="contacts">
      <h3>Contact me</h3>
      <Form method="post">
      {data && data.error && <p style={{color:"red"}}>{data.error}</p>}
        <label>
          <span>Your email:</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Your email:</span>
          <textarea type="text" name="message"></textarea>
        </label>
        <button>Submit</button>

        
      </Form>
    </div>
  );
};

export default Contacts;

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  
  const submission = {
    email: data.get("email"),
    message: data.get("message")
  };
  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long" };
  }alert("Sent successfully!");

  return redirect("/");
};
