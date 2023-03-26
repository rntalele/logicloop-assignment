const getFormattedDate = (date)=>{
        return `${date.getDay()}/${date.getMonth()+1}/${date.getFullYear()}`;
    }

    const getRating = (rating)=>{
        return Math.round(rating/10)
    }

    module.exports = {getFormattedDate,getRating};