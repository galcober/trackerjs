function TicketController($scope){
	$scope.tickets=[
		{id:"1",titulo:"Limit full Login",estado:"Ready",developer:"Ricci"},
		{id:"2",titulo:"Margin exceded in Main Page",estado:"Assigned",developer:"Vesper"},
		{id:"3",titulo:"Button without Link",estado:"In Development",developer:"Gabi"}
	];

	$scope.Save=function() {

		$scope.tickets.push({titulo:$scope.nuevoTicket.titulo,
							estado:$scope.nuevoTicket.estado,
							developer:$scope.nuevoTicket.developer});
		
		$scope.formVisibility=false;
	};

	$scope.formVisibility=false;

	$scope.ShowForm=function() {

		$scope.formVisibility=true;
	};
}