<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<div class="container">

		<div class="row">


			<!-- would be display sidebar -->
			<div class="col-md-3">
				<%@include file="./shared/sidebar.jsp"%>

			</div>

			<!-- would be display sidebar -->
			<div class="col-md-9">
				<!-- Breadcrum -->
				<div class="row">
					<div class="col-lg-12">
						<c:if test="${userClickAllProducts==true}">
							<ol class="breadcrumb">

								<li class="breadcrumb-item active"><a href="${contextRoot}/home">Home</a></li>
								<li class="breadcrumb-item active">All Products</li>
							</ol>
						</c:if>

						<c:if test="${userClickCategoryProducts==true}">
							<ol class="breadcrumb">
								<li class="breadcrumb-item active"><a href="${contextRoot}/home">Home</a></li>
								<li class="breadcrumb-item active">Category</li>
								<li class="breadcrumb-item active">${category.name}</li>
							</ol>
						</c:if>

					</div>

				</div>

			</div>
		</div>



	</div>

</body>
</html>