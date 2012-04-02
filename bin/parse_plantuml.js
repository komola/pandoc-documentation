var pipeData = "";
process.stdin.resume();
process.stdin.on("data", function(data) {
  pipeData += data;
});

process.stdin.on("end", function() {
  parsePlantUml(pipeData);
});

// Parse plantuml stuff

function parsePlantUml(data)
{
  try
  {
    data = JSON.parse(data);
  }
  catch(e)
  {
    console.log("An error occured");
  }
  finally
  {
    console.log(data);
  }
}