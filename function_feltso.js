// JavaScript Document$(document).ready(function(){
function overall_function()
{
	var a=document.getElementById("content_restaurant");
	a.style.display='none';	
		document.getElementById("content_overall").style.display="block";
	
}

function restaurant_function()
{
	
	var a=document.getElementById("content_overall");
	a.style.display='none';
	document.getElementById("content_restaurant").style.display="block";
	document.getElementById('cat_name').innerHTML='Restaurant';
	/* voting bar function*/
	setData(['restaurant_general']);
}


function ambiance_function()
{
	var a=document.getElementById("content_overall");
	a.style.display='none';
	document.getElementById("content_restaurant").style.display="block";
	document.getElementById('cat_name').innerHTML='Ambiance';

	/* voting bar function*/
	setData(['ambiance_general']);
}	
		

function entertainment_function()
{
	
	
		var a=document.getElementById("content_overall");
     	a.style.display='none';
	    document.getElementById("content_restaurant").style.display="block";
		document.getElementById('cat_name').innerHTML='Entertainment';

	/* voting bar function*/
	setData(['entertainment_general']);
}	
		
function food_function()
{
		var a=document.getElementById("content_overall");
	a.style.display='none';
	document.getElementById("content_restaurant").style.display="block";
				document.getElementById('cat_name').innerHTML='Food';

	/* voting bar function*/
	
	setData(["food_general","food_prices","food_options"]);
}	


function drinks_function()
{
		var a=document.getElementById("content_overall");
	a.style.display='none';
	document.getElementById("content_restaurant").style.display="block";
				document.getElementById('cat_name').innerHTML='Drinks';

	/* voting bar function*/

	setData(["drinks_general","drinks_prices","drinks_options"]);
}	

function service_function()
{
		var a=document.getElementById("content_overall");
	a.style.display='none';
	document.getElementById("content_restaurant").style.display="block";
				document.getElementById('cat_name').innerHTML='Service';

	/* voting bar function*/
	setData(['service_general']);
}	

function location_function()
{
		var a=document.getElementById("content_overall");
	a.style.display='none';
	document.getElementById("content_restaurant").style.display="block";
					document.getElementById('cat_name').innerHTML='Location';

	/* voting bar function*/
	setData(['location_general']);
}	




function setData(cat) {
	
	$.getJSON('uploads/myJson.json', function(data) {
	var pos_s='',neg_s='';
	var pos=0,neg=0;
	for (i = 0; i < cat.length; i++) { 
			pos+= data.feltso_gist.feature_wise_stats[cat[i]].positive_count;
			neg+= data.feltso_gist.feature_wise_stats[cat[i]].negative_count;
	
			$.each(data.feltso_gist.feature_wise_samples[cat[i]].positive_samples, function(i, rev_p) {
					pos_s+='<li>'+rev_p.sample+'</li>';
				})
			$.each(data.feltso_gist.feature_wise_samples[cat[i]].negative_samples, function(i, rev_n) {
				neg_s+='<li>'+rev_n.sample+'</li>';
			})
		
		}
	var percentage=(pos/(pos+neg))*100;
	document.getElementById("progress").style.width=+percentage+'%';
	$("#pos_sam").html(pos_s);
	$("#neg_sam").html(neg_s);
	});
}
