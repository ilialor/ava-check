<script>
	import logo_agora from '$lib/images/ag.svg';
	import logo_ava from '$lib/images/logo.png';
	import back from '$lib/images/background-frame.svg';
	import icp_logo from '$lib/images/icp-logo.svg';
	import arrow from '$lib/images/arrow.svg';
	export let cert = {
		owner: 'aaaaa-aa',
		name: 'fu2uo-afawr-hokkm-wohpv-kif7b-6a6ci-sog3h-dsu3c-3lkex-dow4k-nqe',
		publisher: 'fu2uo-afawr-hokkm-wohpv-kif7b-6a6ci-sog3h-dsu3c-3lkex-dow4k-nqe',
		tokenId: '42',
		basis: 'Basic Motoko',
		date: '2024-01-01',
		reputation: {
			category: 'aVa',
			value: '10'
		}
	};
</script>

<section>
	{#if cert && cert.owner !== 'aaaaa-aa'}
		<div class="certificate">
			<div class="cert-frame">
				<div class="background-frame">
					<img class="back" src={back} alt="background" />
				</div>
				<a href="https://internetcomputer.org"><img class="icp-logo" src={icp_logo} alt="ICP" /></a>
				<img class="agorapp-logo" src={logo_agora} alt="agora logo" />
				<div class="content-frame">
					<div class="item-list">
						<div class="name-item-group">
							<div class="name-item-label">Name</div>
							<div class="underscore" />
						</div>
						<div class="course-item-group">
							<div class="course-item-label">Course</div>
							<div class="underscore2" />
						</div>
						<div class="publisher-item-group">
							<div class="publisher-item-label">Publisher</div>
							<div class="underscore3" />
						</div>
						<div class="reputation-item-group">
							<div class="reputation-item-label">Reputation</div>
							<div class="underscore4" />
						</div>
						<div class="category-item-group">
							<div class="category-item-label">Category</div>
							<div class="underscore5" />
						</div>
						<div class="date-item-group">
							<div class="date-item-label">Date</div>
							<div class="underscore6" />
						</div>
					</div>
					<div class="user-value">{cert.name}</div>
					<div class="course-value">{cert.basis}</div>
					<div class="publisher-value">{cert.publisher}</div>
					<div class="reputation-value">{cert.reputation.value}</div>
					<div class="category-value">{cert.reputation.category}</div>
					<div class="date-value">{cert.date}</div>
					<svg
						class="ph-question"
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.20313 10.5469C8.20313 10.6859 8.16189 10.8219 8.08463 10.9375C8.00737 11.0531 7.89756 11.1433 7.76908 11.1965C7.6406 11.2497 7.49922 11.2636 7.36283 11.2365C7.22644 11.2094 7.10115 11.1424 7.00282 11.0441C6.90448 10.9457 6.83752 10.8204 6.81039 10.684C6.78326 10.5477 6.79718 10.4063 6.8504 10.2778C6.90362 10.1493 6.99374 10.0395 7.10937 9.96225C7.225 9.88499 7.36094 9.84375 7.5 9.84375C7.68648 9.84375 7.86533 9.91783 7.99719 10.0497C8.12905 10.1816 8.20313 10.3604 8.20313 10.5469ZM7.5 4.21875C6.20742 4.21875 5.15625 5.16504 5.15625 6.32812V6.5625C5.15625 6.68682 5.20564 6.80605 5.29355 6.89396C5.38145 6.98186 5.50068 7.03125 5.625 7.03125C5.74932 7.03125 5.86855 6.98186 5.95646 6.89396C6.04437 6.80605 6.09375 6.68682 6.09375 6.5625V6.32812C6.09375 5.68359 6.72481 5.15625 7.5 5.15625C8.2752 5.15625 8.90625 5.68359 8.90625 6.32812C8.90625 6.97266 8.2752 7.5 7.5 7.5C7.37568 7.5 7.25645 7.54939 7.16855 7.63729C7.08064 7.7252 7.03125 7.84443 7.03125 7.96875V8.4375C7.03125 8.56182 7.08064 8.68105 7.16855 8.76896C7.25645 8.85686 7.37568 8.90625 7.5 8.90625C7.62432 8.90625 7.74355 8.85686 7.83146 8.76896C7.91937 8.68105 7.96875 8.56182 7.96875 8.4375V8.39531C9.0375 8.19902 9.84375 7.34648 9.84375 6.32812C9.84375 5.16504 8.79258 4.21875 7.5 4.21875ZM13.5938 7.5C13.5938 8.70523 13.2364 9.88339 12.5668 10.8855C11.8972 11.8876 10.9455 12.6687 9.83198 13.1299C8.71849 13.5911 7.49324 13.7118 6.31117 13.4767C5.1291 13.2415 4.0433 12.6612 3.19107 11.8089C2.33884 10.9567 1.75847 9.8709 1.52334 8.68883C1.28821 7.50676 1.40889 6.28151 1.87011 5.16802C2.33133 4.05454 3.11238 3.10282 4.1145 2.43323C5.11661 1.76364 6.29477 1.40625 7.5 1.40625C9.11564 1.40796 10.6646 2.05052 11.807 3.19295C12.9495 4.33538 13.592 5.88436 13.5938 7.5ZM12.6563 7.5C12.6563 6.48019 12.3538 5.48328 11.7873 4.63534C11.2207 3.7874 10.4154 3.12651 9.47321 2.73625C8.53103 2.34598 7.49428 2.24387 6.49407 2.44283C5.49385 2.64178 4.5751 3.13287 3.85398 3.85398C3.13287 4.5751 2.64178 5.49385 2.44283 6.49407C2.24387 7.49428 2.34598 8.53103 2.73625 9.47321C3.12651 10.4154 3.7874 11.2207 4.63534 11.7873C5.48328 12.3538 6.48019 12.6562 7.5 12.6562C8.86705 12.6547 10.1777 12.111 11.1443 11.1443C12.111 10.1777 12.6547 8.86705 12.6563 7.5Z"
							fill="white"
							fill-opacity="0.6"
						/>
					</svg>
					<a href="https://check.ava.capetown"><img class="arrow" src={arrow} alt="arrow" /></a>
				</div>
				<div class="card-title">
					<div class="card-title-value">{cert.tokenId}</div>
					<div class="card-title-name">Certificate №</div>
				</div>
				<a href="https://ava.capetown/en"><img class="ava-icon-1" src={logo_ava} alt="aVa" /></a>
			</div>
		</div>
	{/if}
</section>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Goldman&display=swap');
	.certificate,
	.certificate * {
		box-sizing: border-box;
	}
	.certificate {
		display: flex;
		flex-direction: column;
		gap: 0px;
		align-items: flex-start;
		justify-content: flex-start;
		height: 300px;
		position: relative;
	}
	.cert-frame {
		border-radius: 10px;
		flex-shrink: 0;
		width: 480px;
		height: 300px;
		position: relative;
		overflow: hidden;
	}
	.background-frame {
		width: 480px;
		height: 300px;
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.back {
		width: 450px;
		height: 300px;
		position: absolute;
		left: 0px;
		top: 0px;
		object-fit: cover;
	}
	.icp-logo {
		opacity: 0.5;
		width: 22px;
		height: 12.1px;
		position: absolute;
		left: 405px;
		top: 22.07px;
		transform-origin: 0 0;
		transform: rotate(-0.18deg) scale(1, 1);
		object-fit: cover;
	}
	.agorapp-logo {
		display: flex;
		flex-direction: column;
		gap: 10px;
		align-items: flex-start;
		justify-content: flex-start;
		width: 200px;
		position: absolute;
		left: calc(50% - 225px);
		top: calc(50% - 90px);
		object-fit: cover;
	}
	.content-frame {
		width: 250px;
		height: 195px;
		position: absolute;
		left: 177px;
		top: 72px;
	}
	.item-list {
		display: flex;
		flex-direction: column;
		gap: 15px;
		align-items: flex-end;
		justify-content: flex-start;
		position: absolute;
		left: 0px;
		top: calc(50% - 97.5px);
	}
	.name-item-group {
		flex-shrink: 0;
		width: 220px;
		height: 20px;
		position: static;
	}
	.name-item-label {
		color: #ffffff;
		text-align: center;
		font-family: 'Goldman', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 30px;
		top: 3px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.underscore {
		border-radius: 1px;
		border-style: dashed;
		border-color: #ffffff;
		border-width: 0px 0px 0.7px 0px;
		width: 160px;
		height: 20px;
		position: absolute;
		left: 90px;
		top: 0px;
	}
	.course-item-group {
		flex-shrink: 0;
		width: 225px;
		height: 20px;
		position: static;
	}
	.course-item-label {
		color: #ffffff;
		text-align: center;
		font-family: 'Goldman', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 25px;
		top: 38px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.underscore2 {
		border-radius: 1px;
		border-style: dashed;
		border-color: #ffffff;
		border-width: 0px 0px 0.7px 0px;
		width: 160px;
		height: 20px;
		position: absolute;
		left: 90px;
		top: 35px;
	}
	.publisher-item-group {
		flex-shrink: 0;
		width: 239px;
		height: 20px;
		position: static;
	}
	.publisher-item-label {
		color: #ffffff;
		text-align: center;
		font-family: 'Goldman', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 11px;
		top: 73px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.underscore3 {
		border-radius: 1px;
		border-style: dashed;
		border-color: #ffffff;
		border-width: 0px 0px 0.7px 0px;
		width: 160px;
		height: 20px;
		position: absolute;
		left: 90px;
		top: 70px;
	}
	.reputation-item-group {
		flex-shrink: 0;
		width: 250px;
		height: 20px;
		position: static;
	}
	.reputation-item-label {
		color: #ffffff;
		text-align: center;
		font-family: 'Goldman', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 0px;
		top: 107px;
		width: 71px;
		height: 16px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.underscore4 {
		border-radius: 1px;
		border-style: dashed;
		border-color: #ffffff;
		border-width: 0px 0px 0.7px 0px;
		width: 160px;
		height: 20px;
		position: absolute;
		left: 90px;
		top: 105px;
	}
	.category-item-group {
		flex-shrink: 0;
		width: 244px;
		height: 20px;
		position: static;
	}
	.category-item-label {
		color: #ffffff;
		text-align: center;
		font-family: 'Goldman', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 6px;
		top: 141px;
		width: 71px;
		height: 16px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.underscore5 {
		border-radius: 1px;
		border-style: dashed;
		border-color: #ffffff;
		border-width: 0px 0px 0.7px 0px;
		width: 160px;
		height: 20px;
		position: absolute;
		left: 90px;
		top: 140px;
	}
	.date-item-group {
		flex-shrink: 0;
		width: 231px;
		height: 20px;
		position: static;
	}
	.date-item-label {
		color: #ffffff;
		text-align: center;
		font-family: 'Goldman', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 19px;
		top: 177px;
		width: 71px;
		height: 16px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.underscore6 {
		border-radius: 1px;
		border-style: dashed;
		border-color: #ffffff;
		border-width: 0px 0px 0.7px 0px;
		width: 160px;
		height: 20px;
		position: absolute;
		left: 90px;
		top: 175px;
	}
	.user-value {
		color: #ffffff;
		text-align: center;
		font-family: 'RedHatText', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 90px;
		top: -3px;
		width: 116px;
		height: 21px;
		display: flex;
		align-items: flex-end;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.course-value {
		color: #ffffff;
		text-align: center;
		font-family: 'RedHatText', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 90px;
		top: 40px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.publisher-value {
		color: #ffffff;
		font-family: 'RedHatText', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 90px;
		top: 74px;
		display: flex;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.reputation-value {
		color: #ffffff;
		text-align: center;
		font-family: 'RedHatText', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 90px;
		top: 109px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.category-value {
		color: #ffffff;
		text-align: center;
		font-family: 'RedHatText', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 90px;
		top: 143px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.date-value {
		color: #ffffff;
		text-align: center;
		font-family: 'RedHatText', sans-serif;
		font-size: 12px;
		font-weight: 400;
		position: absolute;
		left: 90px;
		top: 179px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.ph-question {
		width: 15px;
		height: 15px;
		position: absolute;
		left: 232px;
		top: 143px;
		overflow: visible;
	}
	.arrow {
		width: 1.5rem;
		height: 1.5rem;
		position: absolute;
		left: 110.58px;
		top: 105px;
		transform-origin: 0 0;
		transform: rotate(0.002deg) scale(1, 1);
		overflow: hidden;
		object-fit: cover;
	}
	.card-title {
		width: 157px;
		height: 18px;
		position: absolute;
		left: 146px;
		top: 20px;
	}
	.card-title-value {
		color: #ffffff;
		text-align: center;
		font-family: 'RedHatDisplay', sans-serif;
		font-size: 14px;
		font-weight: 700;
		position: absolute;
		left: calc(50% - -51.5px);
		top: 0px;
		width: 33px;
		height: 19px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.card-title-name {
		color: #ffffff;
		text-align: center;
		font-family: 'Goldman', sans-serif;
		font-size: 14px;
		font-weight: 400;
		position: absolute;
		left: 0px;
		top: 0px;
		width: 157px;
		height: 18px;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}
	.ava-icon-1 {
		width: 22px;
		height: 28px;
		position: absolute;
		left: 28px;
		top: 253px;
		overflow: hidden;
		object-fit: cover;
	}
</style>
