import React, { useState } from "react";
import axios from 'axios';
import NavBar from '../components/NavBar';

const Detail = () => {
    const [searchInput, setSearchInput] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [pieChartUrl, setPieChartUrl] = useState('');
    const [radarChartUrl, setRadarChartUrl] = useState('');
    const [salUrl, setSalUrl] = useState('');
    const [predUrl, setPredUrl] = useState('');
    const [mapUrl, setMapUrl] = useState('');
    const [starUrl, setStarUrl] = useState('');
    

    const fetchImageUrls = async (searchInput) => {
        try {
            const responseCorp = await axios.get('https://g39725izal.execute-api.eu-north-1.amazonaws.com/stage1/corp', {
                params: {
                    corp_name: searchInput,
                },
            });

            console.log(responseCorp);  // Add this line
            const data = responseCorp.data; // parse the JSON string

            setLogoUrl(data.logo_url);
            setPieChartUrl(data.pie_chart_url);
            setRadarChartUrl(data.radar_chart_url);
            setSalUrl(data.sal_url);
            setPredUrl(data.pred_url);
            setMapUrl(data.map_url);
            setStarUrl(data.star_url)
            
        } catch (error) {
            console.error(`Error fetching image URLs: `, error);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();

        fetchImageUrls(searchInput)
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(`Error fetching image URLs: `, error);
            });
    };

    return (
        <main className="container">
            <hr /><NavBar /><hr />
            <article id="article">
                <hgroup>
                    <br />
                    <h1 text align="center">"UniCom!  <kbd>{searchInput || '삼성전자'}</kbd> 는 어떤 기업이죠?</h1><br />
                    <h2 text align="center">
                        <strong>원하는 기업의 여러 정보를 확인하실 수 있는 페이지에요!</strong>
                    </h2>
                </hgroup>
                <div className="grid">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="search"
                            id="search"
                            name="search"
                            placeholder="기업명으로 검색해보세요!"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <input type="submit" value="Search" />
                    </form>
                </div>
            </article><hr />
            <div className="grid">
                <article id="logo">
                    <h4 text align="center"><i>About...</i></h4>
                    <img src={logoUrl} alt="logo" />
                    <footer><small><strong><mark>{searchInput || '삼성전자'}</mark></strong>는요...!</small></footer>
                </article>
                <article id="piechart">
                    <h4 text align="center"><i>Pie Chart...</i></h4>
                    <img src={pieChartUrl} alt="Pie Chart" />
                </article>
            </div>
            <div className="grid">
                <article id="radar">
                    <h4 text align="center"><i>Radar Chart...</i></h4>
                    <img src={radarChartUrl} alt="Radar Chart" />
                </article>
                <article id="sal">
                    <h4 text align="center"><i>Sal...</i></h4>
                    <img src={salUrl} alt="Sal" />
                </article>
            </div>
            <div className="grid">
                <article id="pred">
                    <h4 text align="center"><i>Pred...</i></h4>
                    <img src={predUrl} alt="Pred" />
                </article>
                <article id="map">
                    <h4 text align="center"><i>Map...</i></h4>
                    <img src={mapUrl} alt="Map" />
                </article>
                <article id="star">
                    <h4 text align="center"><i>Star...</i></h4>
                    <img src={starUrl} alt="Star" />
                </article>
            </div>
        </main>
    );
}

export default Detail;
