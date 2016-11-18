/*
function findVelocity(x){
  var velocity = [];
  for (var i = 0; i < x.length - 1; i+=1){
    var ax = [0, 0, 0];
    var dt = x[i+1][0]-x[i][0];
    for (var j = 1; j < 4; j+= 1){
      ax[j]=(x[i+1][j]-x[i][j]) * dt;
    }
    velocity.push([dt, Math.pow(Math.pow(ax[0], 2)+Math.pow(ax[1], 2)+Math.pow(ax[2], 2), 0.5)]);
  }
  return findDistance(velocity);
}
function findDistance(v){
  var d = 0;
  for (var i = 0; i < v.length; i+=1){
    d += v[i][0]*v[i][1];
  }
  return d;
}

//return(findVelocity([[1, 2, 3, 4], [2, 5, 6, 7]]));
*/





//************************************************************************************************************

var filesInRequest = request.files;
console.log(request.files);
if (request.files) {

  if (filesInRequest.myFile && filesInRequest.myFile.length > 0) {
    var data = [[],[],[],[]];
    var i = 0;
    //alert(filesInRequest.myFile[0].size);
    var size= 	filesInRequest.myFile[0].size;
    var file = filesInRequest.myFile[0];
    console.log(file[0][2]);
    var string1 = "";
  // for (var i = 0; i < 1000; i+=1)
   //{
   // 	string1+=file[i];  
    //}
    
    
    string1=file.content;
    string1 = string1.replace(string1.substring(0, 957), "");
    string1 = string1.replace(string1.substring(string1.length-43, string1.length-1), "");
    //return string1;
    var arr1 = string1.split('\n');
    var arr2 = [];
    for(var i=0;i<arr1.length;i++)
      {
        arr2.push(arr1[i].split(' '));
      }
    var ax = [];
    var ay = [];
    var az = [];
    var time = [];
    for (var i = 0; i < arr2.length-10;i++)
      {
        //arr2[i][3] = arr2[i][3].replace("\r","");
        ax.push(parseFloat(arr2[i][0]));
        ay.push(parseFloat(arr2[i][1]));
        az.push(parseFloat(arr2[i][2]));
        time.push(parseFloat(arr2[i][3]));
      }
    var vx = [];
    var a = [];
    var vy = [];
    var vz = [];
    var v = [];
    for (var i =0;i<ax.length;i++)
      {
        var r = Math.pow(ax[i],2);
        var s = Math.pow(ay[i],2);
        var t = Math.pow(az[i],2);
        a.push(Math.sqrt((r+s+t)));
      }
	var final = [];
    for (var i =0;i<ax.length;i++)
      {
        final.push(a[i]*time[i]/1000);
      }
    var finaldist = 0;
    for (var i =20;i<ax.length;i++)
      {
        finaldist += final[i]*time[i]/1000;
      }
    finaldist = (finaldist*100);
    storage.global.finalanswer=finaldist;
    return finaldist;
  }
}
return "no file";

