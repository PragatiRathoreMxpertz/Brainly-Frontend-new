import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import Next from "../../Assets/Images/arrow-down.png";
import pervious from "../../Assets/Images/arrow-up.png";
import { FantasyfetchData } from "../../store/Slice/FantasyData";
import { SciencefetchData } from "../../store/Slice/ScienceData";
import { MysteryfetchData } from "../../store/Slice/MysteryData";
import { HistoryfetchData } from "../../store/Slice/HistoryData"
import { AdventurefetchData } from "../../store/Slice/AdventureData";
import { SportfetchData } from "../../store/Slice/SportData"
import StoryCard from './StoryCard';

function AllScienceStories({ filteredBtnText }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [endPoints, setEndPoints] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const location = useLocation();

    const dataFetched = useSelector(state => {
        if (location.pathname === "/ScienceFictionStories") {

            return state.Sciencedata.data;
        } else if (location.pathname === "/FantasyStories") {
            return state.Fantasydata.data;
        }
        else if (location.pathname === "/MysteryStories") {
            return state.Mydata.data;
        }
        else if (location.pathname === "/HistoryStories") {
            return state.Historyedata.data;
        }
        else if (location.pathname === "/AdventureStories") {
            return state.Adventuredata.data;
        }
        else if (location.pathname === "/SportsStories") {
            return state.Sportedata.data;
        }

    });
    const loading = useSelector(state => {
        if (location.pathname === "/ScienceFictionStories") {
            return state.Sciencedata.loading;
        } else if (location.pathname === "/FantasyStories") {
            return state.Fantasydata.loading;
        }
        else if (location.pathname === "/MysteryStories") {
            return state.Mydata.loading;
        }
        else if (location.pathname === "/HistoryStories") {
            return state.Historyedata.loading;
        }
        else if (location.pathname === "/AdventureStories") {
            return state.Adventuredata.loading;
        }
        else if (location.pathname === "/SportsStories") {
            return state.Sportedata.loading;
        }


    });

    const error = useSelector(state => {
        if (location.pathname === "/ScienceFictionStories") {
            return state.Sciencedata.error;
        } else if (location.pathname === "/FantasyStories") {
            return state.Fantasydata.error;
        }
        else if (location.pathname === "/MysteryStories") {
            return state.Mydata.error;
        }
        else if (location.pathname === "/HistoryStories") {
            return state.Historyedata.error;
        }
        else if (location.pathname === "/AdventureStories") {
            return state.Adventuredata.error;
        }
        else if (location.pathname === "/SportsStories") {
            return state.Sportedata.error;
        }

    });


    useEffect(() => {

        let validate = true

        if (location.pathname === "/ScienceFictionStories") {
            setEndPoints("sciencefiction")
            dispatch(SciencefetchData());
            validate = true
        }
        else if (location.pathname === "/FantasyStories") {

            dispatch(FantasyfetchData())
            validate = true
        }
        else if (location.pathname === "/MysteryStories") {
            dispatch(MysteryfetchData())
            validate = true
        }
        else if (location.pathname === "/HistoryStories") {

            dispatch(HistoryfetchData())
            validate = true
        }
        else if (location.pathname === "/AdventureStories") {

            dispatch(AdventurefetchData())
            validate = true
        }
        else if (location.pathname === "/SportsStories") {

            dispatch(SportfetchData())
            validate = true
        }
        return () => {
            validate = false
        };

    }, [dispatch, location]);



    console.log(dataFetched)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }



    const itemsPerPage = 8;

    const filteredStories = dataFetched ? (filteredBtnText ? dataFetched.filter(dataFetched => dataFetched.Status === filteredBtnText) : dataFetched) : [];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentStories = filteredStories.slice(startIndex, endIndex);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };


    const handleStoryCardClick = (id, Brainquest, Storyadvenure, Wordexplore, endPoints, StoryTitle) => {

        console.log("Clicked on story with ID:", id);
        //         console.log(Brainquest)
        //         console.log(Wordexplore)
        //         console.log(Storyadvenure)
        // console.log(endPoints)
        // You can perform any action you want with the ID here
        // For example, navigate to a page with this ID
        navigate(`/mainStory/${id} `, { state: { Brainquest, Storyadvenure, Wordexplore, endPoints, StoryTitle } });
    };

    return (
        <div>
            <div className='cardConatiner'>
                {currentStories.map((item, id) => (
                    <StoryCard
                        key={id}
                        stryIMg={item.Image[0]}
                        text={item.Title}
                        btnText={item.Status}
                        id={item._id}
                        onStoryTextClick={handleStoryCardClick}
                        Brainquest={item.Brainquest}
                        Storyadvenure={item.Storyadvenure}
                        Wordexplore={item.Wordexplore}
                        endPoints={endPoints}
                        StoryTitle={item.Title}

                    />
                ))}


            </div>

            {filteredBtnText === "Clear All" ? "" :
                <div className="p-4 button-container">
                    {currentPage > 1 && (
                        <button className="previous-button" onClick={handlePreviousPage}>
                            <span>
                                <img src={pervious} alt="Previous" />
                            </span>
                            Previous
                        </button>
                    )}
                    {currentStories.length === itemsPerPage && (
                        <button className="next-button" onClick={handleNextPage}>
                            Next
                            <span>
                                <img src={Next} alt="Next" />
                            </span>
                        </button>
                    )}
                </div>
            }

        </div>

    )
}

export default AllScienceStories


