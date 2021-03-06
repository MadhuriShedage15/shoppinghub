$(function() {
	
	
	switch (menu) {
	case 'Contact':
		$('#contact').addClass('active');
		break;
	case 'About':
		$('#about').addClass('active');
		break;
		case 'Home':
		$('#home').addClass('active');
		console.log("hello this is home log");
		break;
	case 'User Cart':
		$('#userCart').addClass('active');
		console.log("hello this is log");
		break;
	case 'All Products':
		$('#products').addClass('active');
		break;

	case 'Manage Products':
		$('#manageProducts').addClass('active');
		break;
	
	default:

		$('#home').addClass('active');
	    $('a_' + menu).addClass('active');
		break;

	}

	/*
	 * this is dummy data so not in use now commiting it.. var products=[
	 * ['1','santosh'], ['2','sanjay'], ['3','ajay'], ['4','vijay'],
	 * ['5','kumar'], ['6','vishal'], ['7','sagar'], ['8','vinay'],
	 * ['9','sujay'], ['10','vilas'], ['11','viswal']
	 * 
	 * 
	 * 
	 * 
	 *  ];
	 
	console.log("hello this is log");
	$table = $('#productListTable');
	// execute the bellow code only where we have this table
	if ($table.length) {
		console.log("this is inside ");

		var jsonUrl = '';

		if (window.categoryid == '') {
			jsonUrl = window.contextRoot + '/json/data/all/products';
		} else {
			jsonUrl = window.contextRoot + '/json/data/category/' + 3
					+ '/products';
		}
		$table
				.DataTable({
					lengthMenu : [
							[ 3, 5, 10, -1 ],
							[ '3 products', '5 products ', '10 products ',
									'All Products ' ] ],
					pageLength : 5,
					// data:products

					ajax : {

						url : jsonUrl,
						dataSrc : ''
					},

					columns : [
							{
								data : 'code',
								mRender : function(data, row, row) {
									return '<img src="' + window.contextRoot
											+ '/resources/images/' + data
											+ '.jpg" class="dataTableImg"/>';
								}

							},
							{

								data : 'name'

							},
							{

								data : 'brand'

							},
							{

								data : 'unitPrice',
								mRender : function(data, type, row) {
									return '&#8377; ' + data

								}

							},

							{

								data : 'quantity',
								mRender : function(data, type, row) {
									if (data < 1) {

										return '<span style="color:red"> out of stock <span/>';
									}
									return data;
								}

							},
							{
								data : 'id',
								bSortable : false,
								mRender : function(data, type, row) {
									var str = '';
									str += '<a href="'+ window.contextRoot+ '/show/'+ data+ '/product" class="btn btn-primary"/><span class="glyphicon glyphicon-eye-open"></span></a>&#160;';
										if(userRole=="ADMIN")
											{
											str += '<a href="'+ window.contextRoot+ '/manage/'+ data+ '/product" class="btn btn-warning"/><span class="glyphicon glyphicon-pencil"></span> </a>';
											}
										else
											{
									if (row.quantity < 1) {
										str += '<a href="javascript:void(0)" class="btn btn-success disabled"/><span class="glyphicon glyphicon-shopping-cart"></span> </a>';
									} else
									{

										
					
						str += '<a href="'+ window.contextRoot+ '/cart/add/'+ data+ '/product" class="btn btn-success"/><span class="glyphicon glyphicon-shopping-cart"></span> </a>';


											
								}
											}
									return str;
								}
							}

					]
				});
	}
	// dismissing the product after 3 seconds
	var $alert = $('.alert');

	if ($alert.length) {
		setTimeOut(function() {
			$alert.fadeOut('slow')
		}, 3000)
	}

	// -----------------------

		// ----------------------------------------
	// data table for adming
	// ----------------------------------------
	$adminProductsTable = $('#adminProductsTable');
	// execute the bellow code only where we have this table
	if ($adminProductsTable.length)
	{
		

		var jsonUrl = window.contextRoot + '/json/data/admin/all/products';

		if (window.categoryid == '') {
			jsonUrl = window.contextRoot + '/json/data/all/products';
		} else {
			jsonUrl = window.contextRoot + '/json/data/category/' + 3
					+ '/products';
		}
		$adminProductsTable.DataTable({
					lengthMenu : [
							[ 10, 30, 50, -1 ],
							[ '10 products', '30 products ', '50 products ',
									'All Products ' ] ],
					pageLength : 30,
					// data:products

					ajax : {

						url : jsonUrl,
						dataSrc : ''
					},

					columns : [
							{
								data : 'id'
														

							},
							{
								data : 'code',
								mRender : function(data, row, row) {
									return '<img src="'
											+ window.contextRoot
											+ '/resources/images/'
											+ data
											+ '.jpg" class="adminDataTableImg"/>';
								}

							},
							{

								data : 'name'

							},
							{

								data : 'brand'

							},

							{

								data : 'quantity',
								mRender : function(data, type, row) {
									if (data < 1) {

										return '<span style="color:red"> out of stock <span/>';
									}
									return data;
								}

							},
							{

								data : 'unitPrice',
								mRender : function(data, type, row) {
									return '&#8377; ' + data

								}

							},
							{
								data : 'active',
								bSortable : false,
								mRender : function(data, type, row) {
									var str = '';
									str += '<label class="switch">';
									if (data) {
										str += '<input type="checkbox" checked="checked" value="'
												+ row.id + '" />';
									} else {
										str += '<input type="checkbox" value="'
												+ row.id + '" />';
									}
									str += '<div class="slider"></div></label>';

									return str;

								}

							},
							{
								data : 'id',
								bSortable : false,
								mRender : function(data, type, row) {
									var str = '';
									str += '<a href="'+window.contextRoot+'/manage/'+ data+ '/product" class="btn btn-warning">';
									str += '<span class="glyphicon glyphicon-pencil"></span></a>';
									return str;

								}

							}

					],
					//after closing the all column we are adding bootbox for loading the table befor the ajax call
					//using the initCompletefunction so alert will work
					//for the alert bootbox while loading the table
					initComplete:function()
					{
						
						var api=this.api();
						api.$('.switch input[type="checkbox"]')
						.on(
								'change',
								function() {
									var checkbox = $(this);
									var checked = checkbox.prop('checked');
									var dMsg = (checked) ? 'You want to activate the product'
											: 'You want to deactivate product?';

									var value = checkbox.prop('value');

									bootbox
											.confirm({

												size : 'medium',
												title : 'Product activation and deactivation',
												message : dMsg,
												callback : function(confirmed) {
													if (confirmed) {
														console.log(value);
														var activationUrl=window.contextRoot+'/manage/product/'+value+'/activation';
														$.post(activationUrl,function(data){bootbox
															.alert({
																size : 'medium',
																title : 'information',
																message : data
																		
															});
														});
														
													} else {
														checkbox.prop('checked', !checked)
													}
												}
											})
								});
					}
				});
	}
	
	//------- AdminTable ends here
	
	
	// to tackale the csrf
	
	var token="sai";
	var header="baba";
	// token=$('meta[name="_csrf"]').attr('content');
	 //header=$('meta[name="_csrf_header"]').attr('content');
	
	if(token.length>0&&header.length>0)
		{
		//set the  token header for the ajaxx request
		
		$(document).ajaxSend(function(e,xhr,options)
				
		{
			 xhr.setRequestHeader(header,token);
		})
		
		}
	//-------------------------------------------------------------------------
	//validation code for category
	//-------------------------------------------------------------------------
	
	var $categoryForm=$('#categoryForm');
	
	if($categoryForm.length)
		{
		$categoryForm.validate({
			
			rules:{
				
				name:
					{
					required:true,
					minlength:2
					
					},
					description:
						{
						required:true,
						
						
						},
						
						messages:
							{
							name:
								{
								required:'Please add the category name !',
								minlength:'minimum length should be 2 '
								
								},
						description:
							{
							required:'Please add the Descritpion !'
							
							}
							},
						errorElement:'em',
						errorPlacement:function(error,element)
						{
							//add the class of the help-block.
							error.addClass('help-block');
							//add the error element after the input element	
							error.insertAfter(element);
						}
						
				
			}
			
		})
		
		}
	//-------------------------------------------------------------------------------------------------------------


var $categoryForm=$('#categoryForm');
	
	if($categoryForm.length)
		{
		$categoryForm.validate({
			
			rules:{
				
				name:
					{
					required:true,
					minlength:2
					
					},
					description:
						{
						required:true,
						
						
						},
						
						messages:
							{
							name:
								{
								required:'Please add the category name !',
								minlength:'minimum length should be 2 '
								
								},
						description:
							{
							required:'Please add the Descritpion !'
							
							}
							},
						errorElement:'em',
						errorPlacement:function(error,element)
						{
							//add the class of the help-block.
							error.addClass('help-block');
							//add the error element after the input element	
							error.insertAfter(element);
						}
						
				
			}
			
		});
		
		}

//----------------------------------
	// handlig the click event of the refresh cart..
	
	$('button[name="refreshCart"]').click(function(){
		
		console.log('inside the refreshcart ');
		//fetch the cartLine id
		
		var cartLineId=$(this).attr('value');
		var countElement=$('#count_'+cartLineId);
		
		var originalCount=countElement.attr('value');
		var currentCount=countElement.val();
		//work only when th count has the change ..
		if(currentCount!==originalCount)
		{
			if(currentCount<1||currentCount>3)
				{
				//reverting back to the original count 
				//user has given value below 1 and above 3
				
				countElement.val(originalCount);
				bootbox.alert(
						{
							size:'medium',
							title:'Error',
							message:'Product count should be minimum 1 and maximum 3'
							
						});
				
				}
			else
				{
				var updateUrl='/onlineshopping'+'/cart/'+cartLineId+'/update?count='+currentCount;
				//forward it to the controller
				window.location.href=updateUrl;
				
				}
		}
		
		
	});
	
	
	//------------------------------
*/});