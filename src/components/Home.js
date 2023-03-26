import {React,useState,useEffect} from 'react';
import '../css/Home.css';
import Filter from './Filter';
import Card from './Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { getRating } from '../utils/Format';

const Home = ()=>{
    const [data,setData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [sortType,setSortType] = useState('release-date');
    const [name,setName] = useState();
    const [score,setScore] = useState();

    const handleFilter = (name,score)=>{       
        let newData = data?.filter((game)=>{
            if(name && !score){
                return game.name.toLowerCase().includes(name.toLowerCase())
            }
            return game.name.toLowerCase().includes(name.toLowerCase()) && getRating(game.rating) >= score;
        });
        setFilteredData(newData);
    }

    const handleSortType = (type,data)=>{
        if(type==='release-date'){
            if(data){
                // console.log(data);
                let orderedData = data?.sort((game1,game2)=>{
                    // console.log(game1.first_release_Date,game2.first_release_Date);
                    let date1 = new Date(game1.first_release_date);
                    let date2 = new Date(game2.first_release_date);
                    return date1-date2;

                });
                // let orderedData = data?.sort((game1,game2)=>game1.rating - game2.rating);
                setFilteredData([...orderedData]);
                // console.log(orderedData);
            }
            else{
                 let orderedData = filteredData?.sort((game1,game2)=>{
                    // console.log(game1.first_release_Date,game2.first_release_Date);
                    let date1 = new Date(game1.first_release_date);
                    let date2 = new Date(game2.first_release_date);
                    return date1-date2;

                });
                 setFilteredData([...orderedData]);
                //  console.log(orderedData);
            }
           
        }
        else if(type==='score'){
            let orderedData = filteredData?.sort((game1,game2)=>game2.rating - game1.rating);
            // console.log(orderedData);
            setFilteredData([...orderedData]);

        }
        else if(type==='name'){
            let orderedData = filteredData?.sort((game1,game2)=>game1.name.toLocaleLowerCase().localeCompare(game2.name.toLocaleLowerCase()));
            // console.log(orderedData);
            setFilteredData([...orderedData]);

        }
    }

    const handleSort = () =>{
        let newData = [...filteredData.reverse()];
        setFilteredData(newData);
        console.log(newData);
    } 

    const handleClear = (e) => {
        e.preventDefault();
        setFilteredData([...data]);
        setName('');
        setScore('');
    }

    const fetchData = async ()=>{
        setLoading(true);
        let data = await axios.get('https://public.connectnow.org.uk/applicant-test/');
        setLoading(false);
        setData(data.data);
        setFilteredData(data.data);
        handleSortType('release-date',data.data)
    }

    

    

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <div className='container'>
            <div className='d-flex p-5 text-white '>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}}><p className='navigation-link'>VIDEO GAMES</p></Link>
                <Link to={'/contact'} style={{textDecoration:'none',color:'white'}}><p className='navigation-link' style={{marginLeft:'50px'}}>CONTACT</p></Link>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <Filter handleFilter={handleFilter} handleSortType={handleSortType} handleSort={handleSort} sortType={sortType} setSortType={setSortType} handleClear={handleClear} name={name} setName={setName} score={score} setScore={setScore}/>
                    </div>
                    {
                        loading ? <div className="col"><Loading/></div> : (<div className="col">
                        {
                            filteredData?.map((game)=><Card game={game} key={game.id}/>)
                        }
                        
                    </div>)
                    }
                    
                </div>
            </div>
            
        </div>
    )

}

export default Home;
