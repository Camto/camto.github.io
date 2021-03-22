$index_file = './index.html'
$panels_file = './Panels.json'

Set-Content -Path $index_file -Value @'
<!DOCTYPE html>

<html>
	<head>
		
		<title>Camto</title>
		<link rel="stylesheet" href="style.css">
		
		<script src="jquery-3.2.1.min.js"></script>
		<script src="Panels.js"></script>
		
	</head>
	<body>
		
		<h1>This is my GitHub page.</h1>
		
		<div id="Panels">
'@

$panels = Get-Content -Raw -Path $panels_file | ConvertFrom-Json

Add-Content -Path $index_file -Value (($panels | % {@"
			<div class="Panel">
				<div class="Panel-Margin-Box">
					<div class="Panel-Content-Box">
					<a href="$($_.link)"><div class="Panel-Image" style="background-image: url('PICS/$($_.image)')"></div></a>
					<a class="Panel-Title" href="$($_.link)">$($_.title)</a>
					<div class="Panel-Description">$($_.description)</div>
					</div>
				</div>
			</div>
"@}) -Join "`n`t`t`t`n")

Add-Content -Path $index_file -Value @'
		</div>
		
	</body>
</html>
'@