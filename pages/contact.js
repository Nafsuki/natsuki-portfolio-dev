import Layout from "../components/Layout";


export default function contact() {
  return (
    <Layout>
      <h1>contact</h1>
      {/* <form name="contact" method="POST" className="flex flex-col p-5 space-y-3 text-lg border rounded-lg">
      <input type="hidden" name="form-name" value="contact" />
      <p>
<input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname">
          Your Name:
        </label> <br />
        <input type="text" name="name" id="yourname" />
      </p>
      <p>
        <label htmlFor="youremail">
          Your Email:
        </label> <br />
        <input type="email" name="email" id="youremail" />
      </p>
      <p>
        <label htmlFor="yourmessage">
          Message:
        </label> <br />
        <textarea name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form> */}
      <form className="flex flex-col p-5 space-y-3 text-lg border rounded-lg" name='contact' method='POST' data-netlify='true'>
        <input type='hidden' name="form-name" value='contact' />
        <p>
          <label htmlFor="name">Name</label><br/>
          <input className='w-[500px] rounded' type="text" id='name' name='name' />
        </p>
        <p>
          <label htmlFor="email">Email</label><br/>
          <input className='w-[500px] rounded' type="text" id='email' name='email' />
        </p>
        <p>
          <label htmlFor="message">Message</label><br/>
          <textarea className='w-[500px] rounded' id='message' name='message'></textarea>
        </p>
        <button className="w-[150px] h-[50px] border self-center rounded-lg bg-blue-300" type='submit'>Send</button>
      </form>
    </Layout>
  )
}
