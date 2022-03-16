import Layout from "../components/Layout";


export default function contact() {
  return (
    <Layout>
      <h1 className="text-lg font-bold">Contact Form</h1>
      <form className="flex flex-col p-5 space-y-3 text-lg border rounded-lg" name='contact' method='POST' data-netlify='true' netlify-honeypot="bot-field">
        <input type='hidden' name="form-name" value='contact' />
        <p>
          <label htmlFor="name">Name</label><br/>
          <input required className='w-[500px] rounded' type="text" id='name' name='name' />
        </p>
        <p>
          <label htmlFor="email">Email</label><br/>
          <input required className='w-[500px] rounded' type="text" id='email' name='email' />
        </p>
        <p>
          <label htmlFor="message">Message</label><br/>
          <textarea required className='w-[500px] rounded' id='message' name='message'></textarea>
        </p>
        <button className="w-[150px] h-[50px] border self-center rounded-lg bg-blue-300" type='submit'>Send</button>
      </form>
    </Layout>
  )
}
