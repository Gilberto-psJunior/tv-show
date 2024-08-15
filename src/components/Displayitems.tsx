import React from "react";
import { useState, useEffect } from "react";
import { MovieShowsWrapper } from "../styles/Styles.modules";
import axios from "axios";
import { apiKey, trending } from "../modules/ApiLinks"
import { CircularProgress } from "@mui/material";









interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    //for tv shows
    first_air_date: string;
    name: string;


}
interface DataProps {
    apiEndpoint: string;
    numberOfMovies: number;
    showButtons: boolean;
    moviesOn: boolean;
    itemHeading: string;
    tvShowOn: boolean;
}


export const DisplayItems: React.FC<DataProps> = ({
    apiEndpoint,
    numberOfMovies,
    showButtons,
    moviesOn, tvShowOn,
    itemHeading, }) => {
    const [showItems, setShowItems] = useState<Movie[]>([]);
    const [currentPage, setCurrentPag] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    //paginarion from the Api
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`${trending}`, {
                    params: {

                        page: currentPage
                    },
                });
                const { results, total_pages } = response.data;
                setShowItems(results.slice(0, 16));
                setTotalPages(totalPages);
                setTimeout(() => { setLoading(true) }, 1000);


            }
            catch (error) {
                console.error("error fetching movies", error);
            }
        }
        fetchMovies();

    }, [currentPage]);

    //função para mudar o formato da data

    function getFormattedDate(dateString: string | number | Date) {
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric"


        } as Intl.DateTimeFormatOptions;
        const date = new Date(dateString);
        return date.toLocaleDateString("pt-BR", options);
    }


    return (


        <MovieShowsWrapper>

            {!loading ? (
                <div className="loadingOverlay"> <CircularProgress size={50} color="warning" />
                    <p>Loading</p></div>
            ) : (
                <>
                    <div className="movieHeading">
                        <h1>{itemHeading}</h1>
                    </div>
                    <div className="movieCard">


                        {showItems.map((items, index) => {
                            const percentage = (items.vote_average / 10) * 100;
                            return (
                                <>
                                    <div className="movie" key={items.id}>
                                        <div className="movieImage">
                                            <img src={`https://image.tmdb.org/t/p/w200/${items.poster_path}`} alt="img" />
                                            <span>{percentage.toFixed(0)}%</span>
                                        </div>
                                        <div className="movieInfo">

                                            {moviesOn && (
                                                <>
                                                    <h4>{items.title}</h4>
                                                    <p>{getFormattedDate(items.release_date)}</p></>
                                            )}
                                            {tvShowOn && (<>
                                                <h4>{items.name}</h4>
                                                <p>{getFormattedDate(items.first_air_date)}</p>

                                            </>)}
                                        </div>

                                    </div>
                                </>

                            )

                        }

                        )}
                        {showButtons && (<>
                        <div className="buttons">
                            {currentPage >1 && (<button className="btnPrev" onClick={prevItemsPage}>back</button>
                            )}
                        </div>
                        
                        </>)}
                    </div>
                </>
            )

            }


        </MovieShowsWrapper>
    )



}