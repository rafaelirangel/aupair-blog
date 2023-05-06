import './AuPair.css'
import ReactCountryFlag from 'react-country-flag'
import globeFlag from '../img/globe-flags.jpeg'

const AuPair = () => {
    return (
        <div className='aupairWrapper'>
            <img className='globeImg' src={globeFlag} alt='globe Flag' />

            <div className='aupairContentWrapper'>
                <div className='aupairAbout'>
                    <h1 className='aboutTitle'>The au pair program</h1>
                    <article className='aboutContent'>
                        The au pair program is an international cultural exchange program designed to provide a mutually beneficial experience for young adults aged 18-30 from different parts of the world. The program involves living with a host family in a foreign country and providing childcare services for up to 45 hours per week in exchange for room and board. The word "au pair" comes from the French term "on par" or "equal to," emphasizing the program's goal of providing a balanced and equitable experience for both the au pair and the host family.
                        The program is regulated by the government of the host country, and both au pairs and host families are required to meet strict requirements to participate. These requirements typically include background checks, language proficiency tests, and proof of financial stability.
                        For young adults, participating in the au pair program offers an opportunity to improve their language skills, experience a new culture, and develop personal and professional skills. Host families benefit from flexible and affordable childcare services while having the opportunity to learn about a different culture and way of life.
                        It's essential to research and understand the requirements and responsibilities involved in the au pair program before deciding to participate. The program's regulations and conditions can vary depending on the host country. Therefore, both au pairs and host families should check the general requirements and conditions to participate in the program. If the au pair requires a visa for the host country, the host country's embassy in the au pair's residence country will decide whether or not the person is eligible to obtain one.
                    </article>
                </div>

                <div className='countriesContents' >
                    <h1 className='aboutCountriesTitle'>Most popular countries to become an Au Pair abroad</h1>
                    <article className='countriesContent'>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='AU' />
                            <p className='countryName'>Australia</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='AT' />
                            <p className='countryName'>Austria</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='BE' />
                            <p className='countryName'>Belgium</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='BR' />
                            <p className='countryName'>Brazil</p>

                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='CA' />
                            <p className='countryName'>Canada</p>

                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='CN' />
                            <p className='countryName'>China</p>

                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='FR' />
                            <p className='countryName'>France</p>

                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='DE' />
                            <p className='countryName'>Germany</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='IT' />
                            <p className='countryName'>Italy</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='PT' />
                            <p className='countryName'>Portugal</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='ES' />
                            <p className='countryName'>Spain</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='SE' />
                            <p className='countryName'>Sweden</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='CH' />
                            <p className='countryName'>Switzerland</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='TR' />
                            <p className='countryName'>Turkey</p>
                        </div>
                        <div className='countries'>
                            <ReactCountryFlag countryCode='US' />
                            <p className='countryName'>Usa</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default AuPair