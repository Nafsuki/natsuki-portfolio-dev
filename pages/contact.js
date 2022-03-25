import Layout from "../components/Layout";


export default function contact() {

  return (
    <Layout>
      <h1 className="mb-5 text-lg font-bold leading-10 text-blue-900 border rounded shadow-lg shadow-indigo-500/50">Contact Form</h1>
      <div className="text-blue-900 w-[260px] xs:w-[350px] sm:w-[630px] md:w-[740px] h-auto border rounded-lg shadow-lg shadow-indigo-500/50">
        <form className="flex flex-col p-5 pt-2 space-y-3 text-lg xs:p-8 xs:pt-5 sm:p-12 sm:pt-8" name='contact' method='POST' data-netlify='true' netlify-honeypot="bot-field">
          <input type='hidden' name="form-name" value='contact' />
          <p>
            <label className="" htmlFor="name">Name</label><br/>
            <input required className='w-full rounded shadow-sm sm:mt-2 sm:mb-3 shadow-indigo-500/50' type="text" id='name' name='name' />
          </p>
          <p>
            <label htmlFor="email">Email</label><br/>
            <input required className='w-full rounded shadow-sm sm:mt-2 sm:mb-3 shadow-indigo-500/50' type="text" id='email' name='email' />
          </p>
          <p>
            <label htmlFor="message">Message</label><br/>
            <textarea required className='w-full mb-3 rounded shadow-sm sm:mt-2 sm:mb-5 shadow-indigo-500/50' id='message' name='message'></textarea>
          </p>
          <button
          className="shadow-sm text-blue-900 shadow-indigo-500/50 w-full sm:w-[200px] p-2 border self-center font-bold rounded-lg bg-indigo-300 hover:bg-blue-600 hover:text-white transition-colors" type='submit'>Send</button>
        </form>
      </div>
    </Layout>
  )
}
