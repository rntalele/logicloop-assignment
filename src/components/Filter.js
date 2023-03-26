import {React,useState,useEffect} from 'react';
import '../css/Filter.css';
const Filter = ({handleFilter,handleSortType,handleSort,sortType,setSortType,handleClear,name,setName,score,setScore})=>{
    const [sortDirection,setSortDirection] = useState('desc');
    

    useEffect(()=>{
        handleFilter(name,score);
    },[name,score])

    const handleSortDirection = (e)=>{
        e.preventDefault();
        if(sortDirection==='desc'){
             setSortDirection('asc');
             handleSort();
        }
        else{
            setSortDirection('desc');
            handleSort();
        }
       
    }

    return(
        <div className="filter-form">
            <h4 style={{marginBottom:'40px'}}>Filter Results</h4>
            <form>
                <label htmlFor="name" className='label'>Name (contains)</label>
                <input type="text" id="name" className='filter-input' placeholder='Text string' value={name} onChange={(e)=>{setName(e.target.value)}} />
                <label htmlFor="min-score" className='label'>Minimum Score</label>
                <input type="text" className='filter-input' id="min-score" placeholder='1-10' value={score} onChange={(e)=>{setScore(e.target.value)}} />
                <label htmlFor="orderby" className='label'>Order By</label>
                <div style={{display:'flex'}}>
                    {sortDirection==='desc' ? <button className='sort-button' onClick={handleSortDirection}><i className="bi bi-arrow-up"></i></button> 
                    : <button className='sort-button' onClick={handleSortDirection}><i className="bi bi-arrow-down"></i></button>}
                    
                    <select className='filter-select' value={sortType} onChange={(e)=>{setSortType(e.target.value);handleSortType(e.target.value);setSortDirection('desc')}}>
                        <option value="release-date">Release Date</option>
                        <option value="score">Score</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <div className='d-flex justify-content-end mt-2'>
                    <button className='clear-button' onClick={handleClear}>Clear</button>
                </div>

                
            </form>
            
        </div>
    )
}

export default Filter;
