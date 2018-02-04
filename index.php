<!DOCTYPE html>

<html>


<style>
@import'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,';
@import 'https://fonts.googleapis.com/css?family=Raleway:200';


body
{
	background:#CCC;
}
.form_json
{
	width:600px;
	height:200px;
	margin:auto;
	margin-top:400px;
	
}
.prompt_select
{
font-family:'Open+Sans+Condensed', sans-serif;
}

form
{
	
}

</style>

<?php

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
$target_dir = "uploads/";
$target_file = $target_dir . 'myJson.json';
$FileType = pathinfo($target_file,PATHINFO_EXTENSION);

    $error='';

// Allow certain file formats
if($FileType != "json" && $FileType != "js") {
    $error="Sorry, only .json/.js files are allowed.";
    
}
	

    if ($error=='' && move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
       header('Location: main.html');
	   
    } elseif($error=='') {
        $error="Sorry, there was an error uploading your file.";
    }

if($error!='')
echo '<h2>'.$error.'</h2>';
}
?>


<body>
<div class="form_json">
<form action="index.php" method="post" enctype="multipart/form-data">
   <span class="prompt_select" >Select json file to upload: </span>
    <input type="file" name="fileToUpload" id="fileToUpload">
    <input type="submit" value="Upload Image" name="submit">
</form>
</div>
</body>
</html>