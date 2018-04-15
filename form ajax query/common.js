$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("РЎРїР°СЃРёР±Рѕ Р·Р° Р·Р°СЏРІРєСѓ! РЎРєРѕСЂРѕ РјС‹ СЃ РІР°РјРё СЃРІСЏР¶РµРјСЃСЏ.");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});