var checkArray = [];
var spaces = [];
var ax = [];
var ay = [];
var az = [];
var bx = [];
var by = [];
var bz = [];
var cx = [];
var cy = [];
var cz = [];
/* 
	ax | ay | az
	bx | by | bz
	cx | cy | cz
*/
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var tmpArray = [];
var tmpArray2 = [];
var i = 0;

var interval;
var sec;
var min;
var hr;
var cycle;

function arrayRandomize(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function arrayRemove(arr, value) {

   return arr.filter(function(ele){
       return ele != value;
   });

}

function generate() {
	cycle = 0;
	do {
	ax = arrayRandomize(array);
	
		tmpArray = arrayRemove(array, ax[0]);
		tmpArray = arrayRemove(tmpArray, ax[1]);
		tmpArray = arrayRemove(tmpArray, ax[2]);
		tmpArray = arrayRandomize(tmpArray);
		ay[0] = tmpArray[0];

			tmpArray = arrayRemove(tmpArray, ay[0]);
			tmpArray = arrayRandomize(tmpArray);
			ay[1] = tmpArray[0];
			
				tmpArray = arrayRemove(tmpArray, ay[1]);
				tmpArray = arrayRandomize(tmpArray);
				ay[2] = tmpArray[0];
				
					tmpArray = arrayRemove(tmpArray, ay[2]);
					tmpArray = arrayRandomize(tmpArray);
					az[0] = tmpArray[0];
					
						tmpArray = arrayRemove(tmpArray, az[0]);
						tmpArray = arrayRandomize(tmpArray);
						az[1] = tmpArray[0];
						
							tmpArray = arrayRemove(tmpArray, az[1]);
							az[2] = tmpArray[0];
	
		tmpArray = arrayRemove(array, ax[0]);
		tmpArray = arrayRemove(tmpArray, ax[3]);
		tmpArray = arrayRemove(tmpArray, ax[6]);
		tmpArray = arrayRandomize(tmpArray);
		bx[0] = tmpArray[0];
		
			tmpArray = arrayRemove(tmpArray, bx[0]);
			tmpArray = arrayRandomize(tmpArray);
			bx[3] = tmpArray[0];
		
				tmpArray = arrayRemove(tmpArray, bx[3]);
				tmpArray = arrayRandomize(tmpArray);
				bx[6] = tmpArray[0];
			
						tmpArray = arrayRemove(tmpArray, bx[6]);
						tmpArray = arrayRandomize(tmpArray);
						cx[0] = tmpArray[0];
					
							tmpArray = arrayRemove(tmpArray, cx[0]);
							tmpArray = arrayRandomize(tmpArray);
							cx[3] = tmpArray[0];
						
								tmpArray = arrayRemove(tmpArray, cx[3]);
								cx[6] = tmpArray[0];
	
	tmpArray = arrayRemove(array, ay[0]);
	tmpArray = arrayRemove(tmpArray, ay[1]);
	tmpArray = arrayRemove(tmpArray, ay[2]);
	tmpArray2 = arrayRemove(tmpArray, ax[3]);
	tmpArray2 = arrayRemove(tmpArray2, ax[4]);
	tmpArray2 = arrayRemove(tmpArray2, ax[5]);
	tmpArray2 = arrayRandomize(tmpArray2);
	ay[3] = tmpArray2[0];
		tmpArray = arrayRemove(tmpArray, ay[3]);
		tmpArray2 = arrayRemove(tmpArray, ax[3]);
		tmpArray2 = arrayRemove(tmpArray2, ax[4]);
		tmpArray2 = arrayRemove(tmpArray2, ax[5]);
		ay[4] = tmpArray2[0];
			tmpArray = arrayRemove(tmpArray, ay[4]);
			tmpArray2 = arrayRemove(tmpArray, ax[3]);
			tmpArray2 = arrayRemove(tmpArray2, ax[4]);
			tmpArray2 = arrayRemove(tmpArray2, ax[5]);
			ay[5] = tmpArray2[0];
				tmpArray = arrayRemove(tmpArray, ay[5]);
				tmpArray2 = arrayRemove(tmpArray, ax[6]);
				tmpArray2 = arrayRemove(tmpArray2, ax[7]);
				tmpArray2 = arrayRemove(tmpArray2, ax[8]);
				ay[6] = tmpArray2[0];
					tmpArray = arrayRemove(tmpArray, ay[6]);
					tmpArray2 = arrayRemove(tmpArray, ax[6]);
					tmpArray2 = arrayRemove(tmpArray2, ax[7]);
					tmpArray2 = arrayRemove(tmpArray2, ax[8]);
					ay[7] = tmpArray2[0];
						tmpArray = arrayRemove(tmpArray, ay[7]);
						ay[8] = tmpArray[0];
						
	tmpArray = arrayRemove(array, az[0]);
	tmpArray = arrayRemove(tmpArray, az[1]);
	tmpArray = arrayRemove(tmpArray, az[2]);
	tmpArray2 = arrayRemove(tmpArray, ax[3]);
	tmpArray2 = arrayRemove(tmpArray2, ax[4]);
	tmpArray2 = arrayRemove(tmpArray2, ax[5]);
	tmpArray2 = arrayRemove(tmpArray2, ay[3]);
	tmpArray2 = arrayRemove(tmpArray2, ay[4]);
	tmpArray2 = arrayRemove(tmpArray2, ay[5]);
	tmpArray2 = arrayRandomize(tmpArray2);
	az[3] = tmpArray2[0];
		tmpArray = arrayRemove(tmpArray, az[3]);
		tmpArray2 = arrayRemove(tmpArray, ax[3]);
		tmpArray2 = arrayRemove(tmpArray2, ax[4]);
		tmpArray2 = arrayRemove(tmpArray2, ax[5]);
		tmpArray2 = arrayRemove(tmpArray2, ay[3]);
		tmpArray2 = arrayRemove(tmpArray2, ay[4]);
		tmpArray2 = arrayRemove(tmpArray2, ay[5]);
		az[4] = tmpArray2[0];
			tmpArray = arrayRemove(tmpArray, az[4]);
			tmpArray2 = arrayRemove(tmpArray, ax[3]);
			tmpArray2 = arrayRemove(tmpArray2, ax[4]);
			tmpArray2 = arrayRemove(tmpArray2, ax[5]);
			tmpArray2 = arrayRemove(tmpArray2, ay[3]);
			tmpArray2 = arrayRemove(tmpArray2, ay[4]);
			tmpArray2 = arrayRemove(tmpArray2, ay[5]);
			az[5] = tmpArray2[0];
				tmpArray = arrayRemove(tmpArray, az[5]);
				tmpArray2 = arrayRemove(tmpArray, ax[6]);
				tmpArray2 = arrayRemove(tmpArray2, ax[7]);
				tmpArray2 = arrayRemove(tmpArray2, ax[8]);
				tmpArray2 = arrayRemove(tmpArray2, ay[6]);
				tmpArray2 = arrayRemove(tmpArray2, ay[7]);
				tmpArray2 = arrayRemove(tmpArray2, ay[8]);
				az[6] = tmpArray2[0];
					tmpArray = arrayRemove(tmpArray, az[6]);
					tmpArray2 = arrayRemove(tmpArray, ax[6]);
					tmpArray2 = arrayRemove(tmpArray2, ax[7]);
					tmpArray2 = arrayRemove(tmpArray2, ax[8]);
					tmpArray2 = arrayRemove(tmpArray2, ay[6]);
					tmpArray2 = arrayRemove(tmpArray2, ay[7]);
					tmpArray2 = arrayRemove(tmpArray2, ay[8]);
					az[7] = tmpArray2[0];
						tmpArray = arrayRemove(tmpArray, az[7]);
						az[8] = tmpArray[0];
						
	tmpArray = arrayRemove(array, bx[0]);
	tmpArray = arrayRemove(tmpArray, bx[3]);
	tmpArray = arrayRemove(tmpArray, bx[6]);
	tmpArray2 = arrayRemove(tmpArray, ax[1]);
	tmpArray2 = arrayRemove(tmpArray2, ax[4]);
	tmpArray2 = arrayRemove(tmpArray2, ax[7]);
	tmpArray2 = arrayRandomize(tmpArray2);
	bx[1] = tmpArray2[0];
		tmpArray = arrayRemove(tmpArray, bx[1]);
		tmpArray2 = arrayRemove(tmpArray, ax[1]);
		tmpArray2 = arrayRemove(tmpArray2, ax[4]);
		tmpArray2 = arrayRemove(tmpArray2, ax[7]);
		tmpArray2 = arrayRandomize(tmpArray2);
		bx[4] = tmpArray2[0];
			tmpArray = arrayRemove(tmpArray, bx[4]);
			tmpArray2 = arrayRemove(tmpArray, ax[1]);
			tmpArray2 = arrayRemove(tmpArray2, ax[4]);
			tmpArray2 = arrayRemove(tmpArray2, ax[7]);
			tmpArray2 = arrayRandomize(tmpArray2);
			bx[7] = tmpArray2[0];
				tmpArray = arrayRemove(tmpArray, bx[7]);
				tmpArray2 = arrayRemove(tmpArray, ax[2]);
				tmpArray2 = arrayRemove(tmpArray2, ax[5]);
				tmpArray2 = arrayRemove(tmpArray2, ax[8]);
				tmpArray2 = arrayRandomize(tmpArray2);
				bx[2] = tmpArray2[0];
					tmpArray = arrayRemove(tmpArray, bx[2]);
					tmpArray2 = arrayRemove(tmpArray, ax[2]);
					tmpArray2 = arrayRemove(tmpArray2, ax[5]);
					tmpArray2 = arrayRemove(tmpArray2, ax[8]);
					tmpArray2 = arrayRandomize(tmpArray2);
					bx[5] = tmpArray2[0];
						tmpArray = arrayRemove(tmpArray, bx[5]);
						tmpArray = arrayRandomize(tmpArray);
						bx[8] = tmpArray[0];
						
	tmpArray = arrayRemove(array, cx[0]);
	tmpArray = arrayRemove(tmpArray, cx[3]);
	tmpArray = arrayRemove(tmpArray, cx[6]);
	tmpArray2 = arrayRemove(tmpArray, ax[1]);
	tmpArray2 = arrayRemove(tmpArray2, ax[4]);
	tmpArray2 = arrayRemove(tmpArray2, ax[7]);
	tmpArray2 = arrayRemove(tmpArray2, bx[1]);
	tmpArray2 = arrayRemove(tmpArray2, bx[4]);
	tmpArray2 = arrayRemove(tmpArray2, bx[7]);
	tmpArray2 = arrayRandomize(tmpArray2);
	cx[1] = tmpArray2[0];
		tmpArray = arrayRemove(tmpArray, cx[1]);
		tmpArray2 = arrayRemove(tmpArray, ax[1]);
		tmpArray2 = arrayRemove(tmpArray2, ax[4]);
		tmpArray2 = arrayRemove(tmpArray2, ax[7]);
		tmpArray2 = arrayRemove(tmpArray2, bx[1]);
		tmpArray2 = arrayRemove(tmpArray2, bx[4]);
		tmpArray2 = arrayRemove(tmpArray2, bx[7]);
		tmpArray2 = arrayRandomize(tmpArray2);
		cx[4] = tmpArray2[0];
			tmpArray = arrayRemove(tmpArray, cx[4]);
			tmpArray2 = arrayRemove(tmpArray, ax[1]);
			tmpArray2 = arrayRemove(tmpArray2, ax[4]);
			tmpArray2 = arrayRemove(tmpArray2, ax[7]);
			tmpArray2 = arrayRemove(tmpArray2, bx[1]);
			tmpArray2 = arrayRemove(tmpArray2, bx[4]);
			tmpArray2 = arrayRemove(tmpArray2, bx[7]);
			tmpArray2 = arrayRandomize(tmpArray2);
			cx[7] = tmpArray2[0];
				tmpArray = arrayRemove(tmpArray, cx[7]);
				tmpArray2 = arrayRemove(tmpArray, ax[2]);
				tmpArray2 = arrayRemove(tmpArray2, ax[5]);
				tmpArray2 = arrayRemove(tmpArray2, ax[8]);
				tmpArray2 = arrayRemove(tmpArray2, bx[2]);
				tmpArray2 = arrayRemove(tmpArray2, bx[5]);
				tmpArray2 = arrayRemove(tmpArray2, bx[8]);
				tmpArray2 = arrayRandomize(tmpArray2);
				cx[2] = tmpArray2[0];
					tmpArray = arrayRemove(tmpArray, cx[2]);
					tmpArray2 = arrayRemove(tmpArray, ax[2]);
					tmpArray2 = arrayRemove(tmpArray2, ax[5]);
					tmpArray2 = arrayRemove(tmpArray2, ax[8]);
					tmpArray2 = arrayRemove(tmpArray2, bx[2]);
					tmpArray2 = arrayRemove(tmpArray2, bx[5]);
					tmpArray2 = arrayRemove(tmpArray2, bx[8]);
					tmpArray2 = arrayRandomize(tmpArray2);
					cx[5] = tmpArray2[0];
						tmpArray = arrayRemove(tmpArray, cx[5]);
						tmpArray = arrayRandomize(tmpArray);
						cx[8] = tmpArray[0];
	
	tmpArray = array;
	tmpArray2 = arrayRemove(tmpArray, ay[0]);
	tmpArray2 = arrayRemove(tmpArray2, ay[3]);
	tmpArray2 = arrayRemove(tmpArray2, ay[6]);
	tmpArray2 = arrayRemove(tmpArray2, bx[0]);
	tmpArray2 = arrayRemove(tmpArray2, bx[1]);
	tmpArray2 = arrayRemove(tmpArray2, bx[2]);
	tmpArray2 = arrayRandomize(tmpArray2);
	by[0] = tmpArray2[0];
		tmpArray = arrayRemove(tmpArray, by[0]);
		tmpArray2 = arrayRemove(tmpArray, ay[1]);
		tmpArray2 = arrayRemove(tmpArray2, ay[4]);
		tmpArray2 = arrayRemove(tmpArray2, ay[7]);
		tmpArray2 = arrayRemove(tmpArray2, bx[0]);
		tmpArray2 = arrayRemove(tmpArray2, bx[1]);
		tmpArray2 = arrayRemove(tmpArray2, bx[2]);
		tmpArray2 = arrayRandomize(tmpArray2);
		by[1] = tmpArray2[0];
			tmpArray = arrayRemove(tmpArray, by[1]);
			tmpArray2 = arrayRemove(tmpArray, ay[2]);
			tmpArray2 = arrayRemove(tmpArray2, ay[5]);
			tmpArray2 = arrayRemove(tmpArray2, ay[8]);
			tmpArray2 = arrayRemove(tmpArray2, bx[0]);
			tmpArray2 = arrayRemove(tmpArray2, bx[1]);
			tmpArray2 = arrayRemove(tmpArray2, bx[2]);
			tmpArray2 = arrayRandomize(tmpArray2);
			by[2] = tmpArray2[0];
				tmpArray = arrayRemove(tmpArray, by[2]);
				tmpArray2 = arrayRemove(tmpArray, ay[0]);
				tmpArray2 = arrayRemove(tmpArray2, ay[3]);
				tmpArray2 = arrayRemove(tmpArray2, ay[6]);
				tmpArray2 = arrayRemove(tmpArray2, bx[3]);
				tmpArray2 = arrayRemove(tmpArray2, bx[4]);
				tmpArray2 = arrayRemove(tmpArray2, bx[5]);
				tmpArray2 = arrayRandomize(tmpArray2);
				by[3] = tmpArray2[0];
					tmpArray = arrayRemove(tmpArray, by[3]);
					tmpArray2 = arrayRemove(tmpArray, ay[1]);
					tmpArray2 = arrayRemove(tmpArray2, ay[4]);
					tmpArray2 = arrayRemove(tmpArray2, ay[7]);
					tmpArray2 = arrayRemove(tmpArray2, bx[3]);
					tmpArray2 = arrayRemove(tmpArray2, bx[4]);
					tmpArray2 = arrayRemove(tmpArray2, bx[5]);
					tmpArray2 = arrayRandomize(tmpArray2);
					by[4] = tmpArray2[0];
						tmpArray = arrayRemove(tmpArray, by[4]);
						tmpArray2 = arrayRemove(tmpArray, ay[2]);
						tmpArray2 = arrayRemove(tmpArray2, ay[5]);
						tmpArray2 = arrayRemove(tmpArray2, ay[8]);
						tmpArray2 = arrayRemove(tmpArray2, bx[3]);
						tmpArray2 = arrayRemove(tmpArray2, bx[4]);
						tmpArray2 = arrayRemove(tmpArray2, bx[5]);
						tmpArray2 = arrayRandomize(tmpArray2);
						by[5] = tmpArray2[0];
							tmpArray = arrayRemove(tmpArray, by[5]);
							tmpArray2 = arrayRemove(tmpArray, ay[0]);
							tmpArray2 = arrayRemove(tmpArray2, ay[3]);
							tmpArray2 = arrayRemove(tmpArray2, ay[6]);
							tmpArray2 = arrayRemove(tmpArray2, bx[6]);
							tmpArray2 = arrayRemove(tmpArray2, bx[7]);
							tmpArray2 = arrayRemove(tmpArray2, bx[8]);
							tmpArray2 = arrayRandomize(tmpArray2);
							by[6] = tmpArray2[0];
								tmpArray = arrayRemove(tmpArray, by[6]);
								tmpArray2 = arrayRemove(tmpArray, ay[1]);
								tmpArray2 = arrayRemove(tmpArray2, ay[4]);
								tmpArray2 = arrayRemove(tmpArray2, ay[7]);
								tmpArray2 = arrayRemove(tmpArray2, bx[6]);
								tmpArray2 = arrayRemove(tmpArray2, bx[7]);
								tmpArray2 = arrayRemove(tmpArray2, bx[8]);
								tmpArray2 = arrayRandomize(tmpArray2);
								by[7] = tmpArray2[0];
									tmpArray = arrayRemove(tmpArray, by[7]);
									tmpArray = arrayRandomize(tmpArray);
									by[8] = tmpArray[0];
	
	tmpArray = array;
	tmpArray2 = arrayRemove(tmpArray, az[0]);
	tmpArray2 = arrayRemove(tmpArray2, az[3]);
	tmpArray2 = arrayRemove(tmpArray2, az[6]);
	tmpArray2 = arrayRemove(tmpArray2, bx[0]);
	tmpArray2 = arrayRemove(tmpArray2, bx[1]);
	tmpArray2 = arrayRemove(tmpArray2, bx[2]);
	tmpArray2 = arrayRemove(tmpArray2, by[0]);
	tmpArray2 = arrayRemove(tmpArray2, by[1]);
	tmpArray2 = arrayRemove(tmpArray2, by[2]);
	tmpArray2 = arrayRandomize(tmpArray2);
	bz[0] = tmpArray2[0];
		tmpArray = arrayRemove(tmpArray, bz[0]);
		tmpArray2 = arrayRemove(tmpArray, az[1]);
		tmpArray2 = arrayRemove(tmpArray2, az[4]);
		tmpArray2 = arrayRemove(tmpArray2, az[7]);
		tmpArray2 = arrayRemove(tmpArray2, bx[0]);
		tmpArray2 = arrayRemove(tmpArray2, bx[1]);
		tmpArray2 = arrayRemove(tmpArray2, bx[2]);
		tmpArray2 = arrayRemove(tmpArray2, by[0]);
		tmpArray2 = arrayRemove(tmpArray2, by[1]);
		tmpArray2 = arrayRemove(tmpArray2, by[2]);
		tmpArray2 = arrayRandomize(tmpArray2);
		bz[1] = tmpArray2[0];
			tmpArray = arrayRemove(tmpArray, bz[1]);
			tmpArray2 = arrayRemove(tmpArray, az[2]);
			tmpArray2 = arrayRemove(tmpArray2, az[5]);
			tmpArray2 = arrayRemove(tmpArray2, az[8]);
			tmpArray2 = arrayRemove(tmpArray2, bx[0]);
			tmpArray2 = arrayRemove(tmpArray2, bx[1]);
			tmpArray2 = arrayRemove(tmpArray2, bx[2]);
			tmpArray2 = arrayRemove(tmpArray2, by[0]);
			tmpArray2 = arrayRemove(tmpArray2, by[1]);
			tmpArray2 = arrayRemove(tmpArray2, by[2]);
			tmpArray2 = arrayRandomize(tmpArray2);
			bz[2] = tmpArray2[0];
				tmpArray = arrayRemove(tmpArray, bz[2]);
				tmpArray2 = arrayRemove(tmpArray, az[0]);
				tmpArray2 = arrayRemove(tmpArray2, az[3]);
				tmpArray2 = arrayRemove(tmpArray2, az[6]);
				tmpArray2 = arrayRemove(tmpArray2, bx[3]);
				tmpArray2 = arrayRemove(tmpArray2, bx[4]);
				tmpArray2 = arrayRemove(tmpArray2, bx[5]);
				tmpArray2 = arrayRemove(tmpArray2, by[3]);
				tmpArray2 = arrayRemove(tmpArray2, by[4]);
				tmpArray2 = arrayRemove(tmpArray2, by[5]);
				tmpArray2 = arrayRandomize(tmpArray2);
				bz[3] = tmpArray2[0];
					tmpArray = arrayRemove(tmpArray, bz[3]);
					tmpArray2 = arrayRemove(tmpArray, az[1]);
					tmpArray2 = arrayRemove(tmpArray2, az[4]);
					tmpArray2 = arrayRemove(tmpArray2, az[7]);
					tmpArray2 = arrayRemove(tmpArray2, bx[3]);
					tmpArray2 = arrayRemove(tmpArray2, bx[4]);
					tmpArray2 = arrayRemove(tmpArray2, bx[5]);
					tmpArray2 = arrayRemove(tmpArray2, by[3]);
					tmpArray2 = arrayRemove(tmpArray2, by[4]);
					tmpArray2 = arrayRemove(tmpArray2, by[5]);
					tmpArray2 = arrayRandomize(tmpArray2);
					bz[4] = tmpArray2[0];
						tmpArray = arrayRemove(tmpArray, bz[4]);
						tmpArray2 = arrayRemove(tmpArray, az[2]);
						tmpArray2 = arrayRemove(tmpArray2, az[5]);
						tmpArray2 = arrayRemove(tmpArray2, az[8]);
						tmpArray2 = arrayRemove(tmpArray2, bx[3]);
						tmpArray2 = arrayRemove(tmpArray2, bx[4]);
						tmpArray2 = arrayRemove(tmpArray2, bx[5]);
						tmpArray2 = arrayRemove(tmpArray2, by[3]);
						tmpArray2 = arrayRemove(tmpArray2, by[4]);
						tmpArray2 = arrayRemove(tmpArray2, by[5]);
						tmpArray2 = arrayRandomize(tmpArray2);
						bz[5] = tmpArray2[0];
							tmpArray = arrayRemove(tmpArray, bz[5]);
							tmpArray2 = arrayRemove(tmpArray, az[0]);
							tmpArray2 = arrayRemove(tmpArray2, az[3]);
							tmpArray2 = arrayRemove(tmpArray2, az[6]);
							tmpArray2 = arrayRemove(tmpArray2, bx[6]);
							tmpArray2 = arrayRemove(tmpArray2, bx[7]);
							tmpArray2 = arrayRemove(tmpArray2, bx[8]);
							tmpArray2 = arrayRemove(tmpArray2, by[6]);
							tmpArray2 = arrayRemove(tmpArray2, by[7]);
							tmpArray2 = arrayRemove(tmpArray2, by[8]);
							tmpArray2 = arrayRandomize(tmpArray2);
							bz[6] = tmpArray2[0];
								tmpArray = arrayRemove(tmpArray, bz[6]);
								tmpArray2 = arrayRemove(tmpArray, az[1]);
								tmpArray2 = arrayRemove(tmpArray2, az[4]);
								tmpArray2 = arrayRemove(tmpArray2, az[7]);
								tmpArray2 = arrayRemove(tmpArray2, bx[6]);
								tmpArray2 = arrayRemove(tmpArray2, bx[7]);
								tmpArray2 = arrayRemove(tmpArray2, bx[8]);
								tmpArray2 = arrayRemove(tmpArray2, by[6]);
								tmpArray2 = arrayRemove(tmpArray2, by[7]);
								tmpArray2 = arrayRemove(tmpArray2, by[8]);
								tmpArray2 = arrayRandomize(tmpArray2);
								bz[7] = tmpArray2[0];
									tmpArray = arrayRemove(tmpArray, bz[7]);
									tmpArray = arrayRandomize(tmpArray);
									bz[8] = tmpArray[0];
	tmpArray = array;
	tmpArray2 = arrayRemove(tmpArray, ay[0]);
	tmpArray2 = arrayRemove(tmpArray2, ay[3]);
	tmpArray2 = arrayRemove(tmpArray2, ay[6]);
	tmpArray2 = arrayRemove(tmpArray2, by[0]);
	tmpArray2 = arrayRemove(tmpArray2, by[3]);
	tmpArray2 = arrayRemove(tmpArray2, by[6]);
	tmpArray2 = arrayRemove(tmpArray2, cx[0]);
	tmpArray2 = arrayRemove(tmpArray2, cx[1]);
	tmpArray2 = arrayRemove(tmpArray2, cx[2]);
	tmpArray2 = arrayRandomize(tmpArray2);
	cy[0] = tmpArray2[0];
		tmpArray = arrayRemove(tmpArray, cy[0]);
		tmpArray2 = arrayRemove(tmpArray, ay[1]);
		tmpArray2 = arrayRemove(tmpArray2, ay[4]);
		tmpArray2 = arrayRemove(tmpArray2, ay[7]);
		tmpArray2 = arrayRemove(tmpArray2, by[1]);
		tmpArray2 = arrayRemove(tmpArray2, by[4]);
		tmpArray2 = arrayRemove(tmpArray2, by[7]);
		tmpArray2 = arrayRemove(tmpArray2, cx[0]);
		tmpArray2 = arrayRemove(tmpArray2, cx[1]);
		tmpArray2 = arrayRemove(tmpArray2, cx[2]);
		tmpArray2 = arrayRandomize(tmpArray2);
		cy[1] = tmpArray2[0];
			tmpArray = arrayRemove(tmpArray, cy[1]);
			tmpArray2 = arrayRemove(tmpArray, ay[2]);
			tmpArray2 = arrayRemove(tmpArray2, ay[5]);
			tmpArray2 = arrayRemove(tmpArray2, ay[8]);
			tmpArray2 = arrayRemove(tmpArray2, by[2]);
			tmpArray2 = arrayRemove(tmpArray2, by[5]);
			tmpArray2 = arrayRemove(tmpArray2, by[8]);
			tmpArray2 = arrayRemove(tmpArray2, cx[0]);
			tmpArray2 = arrayRemove(tmpArray2, cx[1]);
			tmpArray2 = arrayRemove(tmpArray2, cx[2]);
			tmpArray2 = arrayRandomize(tmpArray2);
			cy[2] = tmpArray2[0];
				tmpArray = arrayRemove(tmpArray, cy[2]);
				tmpArray2 = arrayRemove(tmpArray, ay[0]);
				tmpArray2 = arrayRemove(tmpArray2, ay[3]);
				tmpArray2 = arrayRemove(tmpArray2, ay[6]);
				tmpArray2 = arrayRemove(tmpArray2, by[0]);
				tmpArray2 = arrayRemove(tmpArray2, by[3]);
				tmpArray2 = arrayRemove(tmpArray2, by[6]);
				tmpArray2 = arrayRemove(tmpArray2, cx[3]);
				tmpArray2 = arrayRemove(tmpArray2, cx[4]);
				tmpArray2 = arrayRemove(tmpArray2, cx[5]);
				tmpArray2 = arrayRandomize(tmpArray2);
				cy[3] = tmpArray2[0];
					tmpArray = arrayRemove(tmpArray, cy[3]);
					tmpArray2 = arrayRemove(tmpArray, ay[1]);
					tmpArray2 = arrayRemove(tmpArray2, ay[4]);
					tmpArray2 = arrayRemove(tmpArray2, ay[7]);
					tmpArray2 = arrayRemove(tmpArray2, by[1]);
					tmpArray2 = arrayRemove(tmpArray2, by[4]);
					tmpArray2 = arrayRemove(tmpArray2, by[7]);
					tmpArray2 = arrayRemove(tmpArray2, cx[3]);
					tmpArray2 = arrayRemove(tmpArray2, cx[4]);
					tmpArray2 = arrayRemove(tmpArray2, cx[5]);
					tmpArray2 = arrayRandomize(tmpArray2);
					cy[4] = tmpArray2[0];
						tmpArray = arrayRemove(tmpArray, cy[4]);
						tmpArray2 = arrayRemove(tmpArray, ay[2]);
						tmpArray2 = arrayRemove(tmpArray2, ay[5]);
						tmpArray2 = arrayRemove(tmpArray2, ay[8]);
						tmpArray2 = arrayRemove(tmpArray2, by[2]);
						tmpArray2 = arrayRemove(tmpArray2, by[5]);
						tmpArray2 = arrayRemove(tmpArray2, by[8]);
						tmpArray2 = arrayRemove(tmpArray2, cx[3]);
						tmpArray2 = arrayRemove(tmpArray2, cx[4]);
						tmpArray2 = arrayRemove(tmpArray2, cx[5]);
						tmpArray2 = arrayRandomize(tmpArray2);
						cy[5] = tmpArray2[0];
							tmpArray = arrayRemove(tmpArray, cy[5]);
							tmpArray2 = arrayRemove(tmpArray, ay[0]);
							tmpArray2 = arrayRemove(tmpArray2, ay[3]);
							tmpArray2 = arrayRemove(tmpArray2, ay[6]);
							tmpArray2 = arrayRemove(tmpArray2, by[0]);
							tmpArray2 = arrayRemove(tmpArray2, by[3]);
							tmpArray2 = arrayRemove(tmpArray2, by[6]);
							tmpArray2 = arrayRemove(tmpArray2, cx[6]);
							tmpArray2 = arrayRemove(tmpArray2, cx[7]);
							tmpArray2 = arrayRemove(tmpArray2, cx[8]);
							tmpArray2 = arrayRandomize(tmpArray2);
							cy[6] = tmpArray2[0];
								tmpArray = arrayRemove(tmpArray, cy[6]);
								tmpArray2 = arrayRemove(tmpArray, ay[1]);
								tmpArray2 = arrayRemove(tmpArray2, ay[4]);
								tmpArray2 = arrayRemove(tmpArray2, ay[7]);
								tmpArray2 = arrayRemove(tmpArray2, by[1]);
								tmpArray2 = arrayRemove(tmpArray2, by[4]);
								tmpArray2 = arrayRemove(tmpArray2, by[7]);
								tmpArray2 = arrayRemove(tmpArray2, cx[6]);
								tmpArray2 = arrayRemove(tmpArray2, cx[7]);
								tmpArray2 = arrayRemove(tmpArray2, cx[8]);
								tmpArray2 = arrayRandomize(tmpArray2);
								cy[7] = tmpArray2[0];
									tmpArray = arrayRemove(tmpArray, cy[7]);
									tmpArray = arrayRandomize(tmpArray);
									cy[8] = tmpArray[0];
	tmpArray = array;
	tmpArray2 = arrayRemove(tmpArray, az[0]);
	tmpArray2 = arrayRemove(tmpArray2, az[3]);
	tmpArray2 = arrayRemove(tmpArray2, az[6]);
	tmpArray2 = arrayRemove(tmpArray2, bz[0]);
	tmpArray2 = arrayRemove(tmpArray2, bz[3]);
	tmpArray2 = arrayRemove(tmpArray2, bz[6]);
	tmpArray2 = arrayRemove(tmpArray2, cx[0]);
	tmpArray2 = arrayRemove(tmpArray2, cx[1]);
	tmpArray2 = arrayRemove(tmpArray2, cx[2]);
	tmpArray2 = arrayRemove(tmpArray2, cy[0]);
	tmpArray2 = arrayRemove(tmpArray2, cy[1]);
	tmpArray2 = arrayRemove(tmpArray2, cy[2]);
	tmpArray2 = arrayRandomize(tmpArray2);
	cz[0] = tmpArray2[0];
		tmpArray = arrayRemove(tmpArray, cz[0]);
		tmpArray2 = arrayRemove(tmpArray, az[1]);
		tmpArray2 = arrayRemove(tmpArray2, az[4]);
		tmpArray2 = arrayRemove(tmpArray2, az[7]);
		tmpArray2 = arrayRemove(tmpArray2, bz[1]);
		tmpArray2 = arrayRemove(tmpArray2, bz[4]);
		tmpArray2 = arrayRemove(tmpArray2, bz[7]);
		tmpArray2 = arrayRemove(tmpArray2, cx[0]);
		tmpArray2 = arrayRemove(tmpArray2, cx[1]);
		tmpArray2 = arrayRemove(tmpArray2, cx[2]);
		tmpArray2 = arrayRemove(tmpArray2, cy[0]);
		tmpArray2 = arrayRemove(tmpArray2, cy[1]);
		tmpArray2 = arrayRemove(tmpArray2, cy[2]);
		tmpArray2 = arrayRandomize(tmpArray2);
		cz[1] = tmpArray2[0];
			tmpArray = arrayRemove(tmpArray, cz[1]);
			tmpArray2 = arrayRemove(tmpArray, az[2]);
			tmpArray2 = arrayRemove(tmpArray2, az[5]);
			tmpArray2 = arrayRemove(tmpArray2, az[8]);
			tmpArray2 = arrayRemove(tmpArray2, bz[2]);
			tmpArray2 = arrayRemove(tmpArray2, bz[5]);
			tmpArray2 = arrayRemove(tmpArray2, bz[8]);
			tmpArray2 = arrayRemove(tmpArray2, cx[0]);
			tmpArray2 = arrayRemove(tmpArray2, cx[1]);
			tmpArray2 = arrayRemove(tmpArray2, cx[2]);
			tmpArray2 = arrayRemove(tmpArray2, cy[0]);
			tmpArray2 = arrayRemove(tmpArray2, cy[1]);
			tmpArray2 = arrayRemove(tmpArray2, cy[2]);
			tmpArray2 = arrayRandomize(tmpArray2);
			cz[2] = tmpArray2[0];
				tmpArray = arrayRemove(tmpArray, cz[2]);
				tmpArray2 = arrayRemove(tmpArray, az[0]);
				tmpArray2 = arrayRemove(tmpArray2, az[3]);
				tmpArray2 = arrayRemove(tmpArray2, az[6]);
				tmpArray2 = arrayRemove(tmpArray2, bz[0]);
				tmpArray2 = arrayRemove(tmpArray2, bz[3]);
				tmpArray2 = arrayRemove(tmpArray2, bz[6]);
				tmpArray2 = arrayRemove(tmpArray2, cx[3]);
				tmpArray2 = arrayRemove(tmpArray2, cx[4]);
				tmpArray2 = arrayRemove(tmpArray2, cx[5]);
				tmpArray2 = arrayRemove(tmpArray2, cy[3]);
				tmpArray2 = arrayRemove(tmpArray2, cy[4]);
				tmpArray2 = arrayRemove(tmpArray2, cy[5]);
				tmpArray2 = arrayRandomize(tmpArray2);
				cz[3] = tmpArray2[0];
					tmpArray = arrayRemove(tmpArray, cz[3]);
					tmpArray2 = arrayRemove(tmpArray, az[1]);
					tmpArray2 = arrayRemove(tmpArray2, az[4]);
					tmpArray2 = arrayRemove(tmpArray2, az[7]);
					tmpArray2 = arrayRemove(tmpArray2, bz[1]);
					tmpArray2 = arrayRemove(tmpArray2, bz[4]);
					tmpArray2 = arrayRemove(tmpArray2, bz[7]);
					tmpArray2 = arrayRemove(tmpArray2, cx[3]);
					tmpArray2 = arrayRemove(tmpArray2, cx[4]);
					tmpArray2 = arrayRemove(tmpArray2, cx[5]);
					tmpArray2 = arrayRemove(tmpArray2, cy[3]);
					tmpArray2 = arrayRemove(tmpArray2, cy[4]);
					tmpArray2 = arrayRemove(tmpArray2, cy[5]);
					tmpArray2 = arrayRandomize(tmpArray2);
					cz[4] = tmpArray2[0];
						tmpArray = arrayRemove(tmpArray, cz[4]);
						tmpArray2 = arrayRemove(tmpArray, az[2]);
						tmpArray2 = arrayRemove(tmpArray2, az[5]);
						tmpArray2 = arrayRemove(tmpArray2, az[8]);
						tmpArray2 = arrayRemove(tmpArray2, bz[2]);
						tmpArray2 = arrayRemove(tmpArray2, bz[5]);
						tmpArray2 = arrayRemove(tmpArray2, bz[8]);
						tmpArray2 = arrayRemove(tmpArray2, cx[3]);
						tmpArray2 = arrayRemove(tmpArray2, cx[4]);
						tmpArray2 = arrayRemove(tmpArray2, cx[5]);
						tmpArray2 = arrayRemove(tmpArray2, cy[3]);
						tmpArray2 = arrayRemove(tmpArray2, cy[4]);
						tmpArray2 = arrayRemove(tmpArray2, cy[5]);
						tmpArray2 = arrayRandomize(tmpArray2);
						cz[5] = tmpArray2[0];
							tmpArray = arrayRemove(tmpArray, cz[5]);
							tmpArray2 = arrayRemove(tmpArray, az[0]);
							tmpArray2 = arrayRemove(tmpArray2, az[3]);
							tmpArray2 = arrayRemove(tmpArray2, az[6]);
							tmpArray2 = arrayRemove(tmpArray2, bz[0]);
							tmpArray2 = arrayRemove(tmpArray2, bz[3]);
							tmpArray2 = arrayRemove(tmpArray2, bz[6]);
							tmpArray2 = arrayRemove(tmpArray2, cx[6]);
							tmpArray2 = arrayRemove(tmpArray2, cx[7]);
							tmpArray2 = arrayRemove(tmpArray2, cx[8]);
							tmpArray2 = arrayRemove(tmpArray2, cy[6]);
							tmpArray2 = arrayRemove(tmpArray2, cy[7]);
							tmpArray2 = arrayRemove(tmpArray2, cy[8]);
							tmpArray2 = arrayRandomize(tmpArray2);
							cz[6] = tmpArray2[0];
								tmpArray = arrayRemove(tmpArray, cz[6]);
								tmpArray2 = arrayRemove(tmpArray, az[1]);
								tmpArray2 = arrayRemove(tmpArray2, az[4]);
								tmpArray2 = arrayRemove(tmpArray2, az[7]);
								tmpArray2 = arrayRemove(tmpArray2, bz[1]);
								tmpArray2 = arrayRemove(tmpArray2, bz[4]);
								tmpArray2 = arrayRemove(tmpArray2, bz[7]);
								tmpArray2 = arrayRemove(tmpArray2, cx[6]);
								tmpArray2 = arrayRemove(tmpArray2, cx[7]);
								tmpArray2 = arrayRemove(tmpArray2, cx[8]);
								tmpArray2 = arrayRemove(tmpArray2, cy[6]);
								tmpArray2 = arrayRemove(tmpArray2, cy[7]);
								tmpArray2 = arrayRemove(tmpArray2, cy[8]);
								tmpArray2 = arrayRandomize(tmpArray2);
								cz[7] = tmpArray2[0];
									tmpArray = arrayRemove(tmpArray, cz[7]);
									tmpArray = arrayRandomize(tmpArray);
									cz[8] = tmpArray[0];
						
		checkArray = [ay[3], ay[4], ay[5], ay[6], ay[7], ay[8], az[3], az[4], az[5], az[6], az[7], az[8], bx[1], bx[2], bx[4], bx[5], bx[7], bx[8], by[0], by[1], by[2], by[3], by[4], by[5], by[6], by[7], by[8], bz[0], bz[1], bz[2], bz[3], bz[4], bz[5], bz[6], bz[7], bz[8], cx[1], cx[2], cx[4], cx[5], cx[7], cx[8], cy[0], cy[1], cy[2], cy[3], cy[4], cy[5], cy[6], cy[7], cy[8], cz[0], cz[1], cz[2], cz[3], cz[4], cz[5], cz[6], cz[7], cz[8]];
		cycle++;
	}while(checkArray.includes(undefined));
	numberLoad();
	spaces = ax.concat(ay,az,bx,by,bz,cx,cy,cz);
	document.getElementById("overlay").style.zIndex = -5;
	document.getElementById("result").style.zIndex = -5;
	document.getElementById("menu").style.zIndex = 5;
	timerStart();
        console.log(cycle);
}

function check() {
	timerStop();
	var n = 1;
	var l = "A";
	var Arr = 0;
	do {
		checkArray[Arr] = document.getElementById(l + n).value;
		Arr++;
		n++;
		if(n == 10) {
			n = 1;
			if(l == "H") {
				l = "I"
			}
			if(l == "G") {
				l = "H"
			}
			if(l == "F") {
				l = "G"
			}
			if(l == "E") {
				l = "F"
			}
			if(l == "D") {
				l = "E"
			}
			if(l == "C") {
				l = "D"
			}
			if(l == "B") {
				l = "C"
			}
			if(l == "A") {
				l = "B"
			}
		}
	}while(Arr != 81)
	if(checkArray == spaces){
		document.getElementById("result").innerHTML = "<span id=resultOk>Congratulations</span><span id=timerEnd>Time: " + hr + ":" + min + ":" + sec + "</span><button onclick=generate() class=buttonStart id=buttonStart>Retry</button>";
		document.getElementById("menu").style.zIndex = -5;
		document.getElementById("result").style.zIndex = 5;
	}
	else if(checkArray != spaces){
		document.getElementById("result").innerHTML = "<span id=resultFail>You Failed</span><span id=timerEnd>Time: " + hr + ":" + min + ":" + sec + "</span><button onclick=generate() class=buttonStart id=buttonStart>Retry</button>";
		document.getElementById("menu").style.zIndex = -5;
		document.getElementById("result").style.zIndex = 5;
	}
}

function timerStart() {
	sec = 0;
	min = 0;
	hr = 0;
	document.getElementById("ss").innerHTML = sec;
	document.getElementById("mm").innerHTML = ":" + min + ":" ;
	document.getElementById("hh").innerHTML = hr;
	interval = setInterval(timer, 1000);
}

function timerStop() {
	clearInterval(interval);
}

function timer() {
	document.getElementById("ss").innerHTML = sec;
	document.getElementById("mm").innerHTML = ":" + min + ":";
	document.getElementById("hh").innerHTML = hr;
	sec++;
	if (sec == 60) {
		sec = 0;
		min++;
	}
	if (min == 60) {
		min = 0;
		hr++;
	}
}

function fillIn() {

}

function fill() {
	document.getElementById("A1").value = ax[0];
	document.getElementById("A2").value = ax[1];
	document.getElementById("A3").value = ax[2];
	document.getElementById("A4").value = ay[0];
	document.getElementById("A5").value = ay[1];
	document.getElementById("A6").value = ay[2];
	document.getElementById("A7").value = az[0];
	document.getElementById("A8").value = az[1];
	document.getElementById("A9").value = az[2];
	document.getElementById("B1").value = ax[3];
	document.getElementById("B2").value = ax[4];
	document.getElementById("B3").value = ax[5];
	document.getElementById("B4").value = ay[3];
	document.getElementById("B5").value = ay[4];
	document.getElementById("B6").value = ay[5];
	document.getElementById("B7").value = az[3];
	document.getElementById("B8").value = az[4];
	document.getElementById("B9").value = az[5];
	document.getElementById("C1").value = ax[6];
	document.getElementById("C2").value = ax[7];
	document.getElementById("C3").value = ax[8];
	document.getElementById("C4").value = ay[6];
	document.getElementById("C5").value = ay[7];
	document.getElementById("C6").value = ay[8];
	document.getElementById("C7").value = az[6];
	document.getElementById("C8").value = az[7];
	document.getElementById("C9").value = az[8];
	document.getElementById("D1").value = bx[0];
	document.getElementById("D2").value = bx[1];
	document.getElementById("D3").value = bx[2];
	document.getElementById("D4").value = by[0];
	document.getElementById("D5").value = by[1];
	document.getElementById("D6").value = by[2];
	document.getElementById("D7").value = bz[0];
	document.getElementById("D8").value = bz[1];
	document.getElementById("D9").value = bz[2];
	document.getElementById("E1").value = bx[3];
	document.getElementById("E2").value = bx[4];
	document.getElementById("E3").value = bx[5];
	document.getElementById("E4").value = by[3];
	document.getElementById("E5").value = by[4];
	document.getElementById("E6").value = by[5];
	document.getElementById("E7").value = bz[3];
	document.getElementById("E8").value = bz[4];
	document.getElementById("E9").value = bz[5];
	document.getElementById("F1").value = bx[6];
	document.getElementById("F2").value = bx[7];
	document.getElementById("F3").value = bx[8];
	document.getElementById("F4").value = by[6];
	document.getElementById("F5").value = by[7];
	document.getElementById("F6").value = by[8];
	document.getElementById("F7").value = bz[6];
	document.getElementById("F8").value = bz[7];
	document.getElementById("F9").value = bz[8];
	document.getElementById("G1").value = cx[0];
	document.getElementById("G2").value = cx[1];
	document.getElementById("G3").value = cx[2];
	document.getElementById("G4").value = cy[0];
	document.getElementById("G5").value = cy[1];
	document.getElementById("G6").value = cy[2];
	document.getElementById("G7").value = cz[0];
	document.getElementById("G8").value = cz[1];
	document.getElementById("G9").value = cz[2];
	document.getElementById("H1").value = cx[3];
	document.getElementById("H2").value = cx[4];
	document.getElementById("H3").value = cx[5];
	document.getElementById("H4").value = cy[3];
	document.getElementById("H5").value = cy[4];
	document.getElementById("H6").value = cy[5];
	document.getElementById("H7").value = cz[3];
	document.getElementById("H8").value = cz[4];
	document.getElementById("H9").value = cz[5];
	document.getElementById("I1").value = cx[6];
	document.getElementById("I2").value = cx[7];
	document.getElementById("I3").value = cx[8];
	document.getElementById("I4").value = cy[6];
	document.getElementById("I5").value = cy[7];
	document.getElementById("I6").value = cy[8];
	document.getElementById("I7").value = cz[6];
	document.getElementById("I8").value = cz[7];
	document.getElementById("I9").value = cz[8];
}

function numberLoad() {
	spaces[0] = ax[0];
	spaces[1] = ax[1];
	spaces[2] = ax[2];
	spaces[3] = ay[0];
	spaces[4] = ay[1];
	spaces[5] = ay[2];
	spaces[6] = az[0];
	spaces[7] = az[1];
	spaces[8] = az[2];
	spaces[9] = ax[3];
	spaces[10] = ax[4];
	spaces[11] = ax[5];
	spaces[12] = ay[3];
	spaces[13] = ay[4];
	spaces[14] = ay[5];
	spaces[15] = az[3];
	spaces[16] = az[4];
	spaces[17] = az[5];
	spaces[18] = ax[6];
	spaces[19] = ax[7];
	spaces[20] = ax[8];
	spaces[21] = ay[6];
	spaces[22] = ay[7];
	spaces[23] = ay[8];
	spaces[24] = az[6];
	spaces[25] = az[7];
	spaces[26] = az[8];
	spaces[27] = bx[0];
	spaces[28] = bx[1];
	spaces[29] = bx[2];
	spaces[30] = by[0];
	spaces[31] = by[1];
	spaces[32] = by[2];
	spaces[33] = bz[0];
	spaces[34] = bz[1];
	spaces[35] = bz[2];
	spaces[36] = bx[3];
	spaces[37] = bx[4];
	spaces[38] = bx[5];
	spaces[39] = by[3];
	spaces[40] = by[4];
	spaces[41] = by[5];
	spaces[42] = bz[3];
	spaces[43] = bz[4];
	spaces[44] = bz[5];
	spaces[45] = bx[6];
	spaces[46] = bx[7];
	spaces[47] = bx[8];
	spaces[48] = by[6];
	spaces[49] = by[7];
	spaces[50] = by[8];
	spaces[51] = bz[6];
	spaces[52] = bz[7];
	spaces[53] = bz[8];
	spaces[54] = cx[0];
	spaces[55] = cx[1];
	spaces[56] = cx[2];
	spaces[57] = cy[0];
	spaces[58] = cy[1];
	spaces[59] = cy[2];
	spaces[60] = cz[0];
	spaces[61] = cz[1];
	spaces[62] = cz[2];
	spaces[63] = cx[3];
	spaces[64] = cx[4];
	spaces[65] = cx[5];
	spaces[66] = cy[3];
	spaces[67] = cy[4];
	spaces[68] = cy[5];
	spaces[69] = cz[3];
	spaces[70] = cz[4];
	spaces[71] = cz[5];
	spaces[72] = cx[6];
	spaces[73] = cx[7];
	spaces[74] = cx[8];
	spaces[75] = cy[6];
	spaces[76] = cy[7];
	spaces[77] = cy[8];
	spaces[78] = cz[6];
	spaces[79] = cz[7];
	spaces[80] = cz[8];
}
