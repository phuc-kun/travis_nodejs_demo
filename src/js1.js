function check_year(){
	if((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0))
    {
        rturn 1;
    }
    else{
        return 0;
    }
}