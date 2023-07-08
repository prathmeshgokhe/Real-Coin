import React from 'react'
import "./crypto.scss"

const Crypto = () => {

    const [crypto, setcrypto] = useState(null);

    useEffect(() => {

        const fetchApi = async () => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=b833cf42a61d4d5b116221599edd127a&query=${search}`
            const response = await fetch(url)
            const resJson = await response.json();
            // console.log(resJson)
            setMovie(resJson)
        }

        fetchApi();
    }, [search])

    return (
        <>
            <div className='container'>
                <div className='main'>
                    <div className='heading'>
                        <h1>Realcoin</h1>
                    </div>
                    <hr />
                    <div className='crypto-container'>
                        <div className='crypto-info'>
                            <div className='image'>
                            </div>
                            <div className='info'>
                                <h1>Bitcoin</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Crypto