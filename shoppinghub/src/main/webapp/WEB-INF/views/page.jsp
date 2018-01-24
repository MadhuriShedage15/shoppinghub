<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<spring:url var="css" value="/resources/css" />
<spring:url var="js" value="/resources/js" />
<spring:url var="images" value="/resources/images" />

<c:set var="contextRoot" value="${pageContext.request.contextPath}"></c:set>




<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Shop Homepage - Start Bootstrap Template</title>

<!-- Bootstrap core CSS -->
<link href="${css}/bootstrap.min.css" rel="stylesheet">

<!-- <link href="${css}/bootstarp-readable-theme.css" rel="stylesheet">-->

<!-- Custom styles for this template -->
<link href="${css}/shop-homepage.css" rel="stylesheet">

<link href="${css}/myapp.css" rel="stylesheet">

<script type="text/javascript">
	window.menu = '${title}';
	window.contextRoot = '${contextRoot}';
</script>


</head>

<body>

	<div class="wrapper">
		<!-- Navigation -->

		<%@include file="./shared/navbar.jsp"%>

		<!-- Page Content -->

		<div class="content">
			<c:if test="${userClickHome==true}">
				<%@include file="home.jsp"%>
			</c:if>
			
			<c:if test="${userClickAbout==true}">
				<%@include file="about.jsp"%>
			</c:if>
			
			<c:if test="${userClickContact==true}">
				<%@include file="contact.jsp"%>
			</c:if>
			
			<c:if test="${userClickAllProducts==true or userClickCategoryProducts==true}">
				<%@include file="listProducts.jsp"%>
			</c:if>
		</div>
		

		<!-- /.container -->

		<!-- Footer -->
		<%@include file="./shared/footer.jsp"%>

		<!-- Bootstrap core JavaScript -->
		<script src="${js}/jquery.min.js"></script>
		<script src="${js}/popper.js"></script>
		<script src="${js}/bootstrap.min.js"></script>

		<script src="${js}/bootbox.min.js"></script>

		<!-- Bootstrap jquery datatables -->
		<script src="${js}/jquery.dataTables.js"></script>

		<script src="${js}/myapp.js"></script>

	</div>
</body>

</html>
