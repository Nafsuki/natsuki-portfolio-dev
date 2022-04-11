import Layout from "../components/Layout"

export default function contact() {

  return (
    <Layout>
      <h1 className="mt-20 mb-5 text-lg font-bold leading-10 text-gray-900 border-4 border-double rounded shadow-lg dark:text-gray-50 shadow-indigo-500/50">Contact Form</h1>
      <div className="mb-20 border-double text-blue-900 dark:text-gray-100 w-[260px] xs:w-[350px] sm:w-[630px] md:w-[740px] h-auto border-4 rounded-lg shadow-lg shadow-indigo-500/50">
        <form className="flex flex-col p-5 pt-2 space-y-3 text-lg xs:p-8 xs:pt-5 sm:p-12 sm:pt-8" name='contact' method='POST' data-netlify='true' netlify-honeypot="bot-field">
          <input type='hidden' name="form-name" value='contact' />
          <p>
            <label className="sm:font-semibold" htmlFor="name">Name</label><br/>
            <input required className='w-full rounded shadow-sm sm:mt-2 sm:mb-3 shadow-indigo-500/50' type="text" id='name' name='name' />
          </p>
          <p>
            <label className="sm:font-semibold" htmlFor="email">Email</label><br/>
            <input required className='w-full rounded shadow-sm sm:mt-2 sm:mb-3 shadow-indigo-500/50' type="text" id='email' name='email' />
          </p>
          <p>
            <label className="sm:font-semibold" htmlFor="message">Message</label><br/>
            <textarea required className='w-full mb-3 rounded shadow-sm sm:mt-2 sm:mb-5 shadow-indigo-500/50' id='message' name='message'></textarea>
          </p>
          <button
          className="shadow-sm border-2 text-blue-900 shadow-indigo-500/50 w-full sm:w-[200px] p-2 self-center font-bold rounded-lg bg-indigo-300 hover:bg-indigo-800 hover:text-white transition-colors" type='submit'>Send</button>
        </form>
      </div>
    </Layout>
  )
}
