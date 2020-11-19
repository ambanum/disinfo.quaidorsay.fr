---
permalink: /fr/cgus/experimentations
breadcrumb_items:
 - url: /fr/cgus
   label: Suivi des CGU's
title: Experimentation CGUs
navbar_items:
  - <a href="/" class="header_mainnav_link">Accueil</a>
  - <a href="!SITE_URL!/fr/#nos-actions" class="header_mainnav_link">Nos actions</a>
  - <a href="/encyclopedia" class="header_mainnav_link">Désencyclopédie</a>
  - <a href="/fr/cgus" class="header_mainnav_link">CGUs</a>
js_files:
  - assets/js/vendor/d3/d3.5.16.0.min.js
  - assets/js/vendor/c3/c3.0.7.20.min.js
  - assets/js/cgus/chart.js
  - assets/js/vendor/simple-datatables/simple-datatables.2.1.14.min.js
  - assets/js/cgus/datatables.js
css_files:
  - assets/js/vendor/c3/c3.0.7.20.min.css
---

# Experimentation CGUs

{% include breadcrumb.html %}

{% include cguschart.html %}

<script type="text/javascript">
	const infoLabel = "{{ site.data.translations.cgus.datatables.info[page.lang] }}";
</script>

## Stats
<div markdown="0">
	<table class="datatables">
	<thead>
		<tr>
		<th>Service</th>
		<th>Type</th>
		<th>Nombre de mots</th>
		<th>Readability</th>
		<th>Readability level</th>
		</tr>
	</thead>
	<tbody>
		<tr>
		<td>Cdiscount - Commercial Terms</td>
		<td>Commercial Terms</td>
		<td>30008</td>
		<td>72.912068</td>
		<td>11.798465</td>
		</tr>
		<tr>
		<td>Cdiscount - Trackers Policy</td>
		<td>Trackers Policy</td>
		<td>8420</td>
		<td>60.294342</td>
		<td>16.156304</td>
		</tr>
		<tr>
		<td>Cdiscount - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4455</td>
		<td>58.571816</td>
		<td>17.525086</td>
		</tr>
		<tr>
		<td>Apple - Human Rights Policy</td>
		<td>Human Rights Policy</td>
		<td>1495</td>
		<td>30.919436</td>
		<td>16.088988</td>
		</tr>
		<tr>
		<td>Apple - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4641</td>
		<td>28.080259</td>
		<td>16.330294</td>
		</tr>
		<tr>
		<td>We Heart It - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>6308</td>
		<td>23.600398</td>
		<td>18.172169</td>
		</tr>
		<tr>
		<td>We Heart It - Terms of Service</td>
		<td>Terms of Service</td>
		<td>10137</td>
		<td>30.784144</td>
		<td>17.332047</td>
		</tr>
		<tr>
		<td>Twitter - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>7401</td>
		<td>38.934476</td>
		<td>15.333300</td>
		</tr>
		<tr>
		<td>Twitter - Copyright Claims Policy</td>
		<td>Copyright Claims Policy</td>
		<td>2359</td>
		<td>43.987624</td>
		<td>12.652629</td>
		</tr>
		<tr>
		<td>Twitter - Trackers Policy</td>
		<td>Trackers Policy</td>
		<td>1776</td>
		<td>43.330053</td>
		<td>13.609973</td>
		</tr>
		<tr>
		<td>Twitter - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3095</td>
		<td>32.092682</td>
		<td>17.050615</td>
		</tr>
		<tr>
		<td>Twitter - Law Enforcement Guidelines</td>
		<td>Law Enforcement Guidelines</td>
		<td>3191</td>
		<td>35.285964</td>
		<td>14.999269</td>
		</tr>
		<tr>
		<td>Twitter - Developer Terms</td>
		<td>Developer Terms</td>
		<td>5040</td>
		<td>32.214499</td>
		<td>15.220054</td>
		</tr>
		<tr>
		<td>Lingualeo - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>753</td>
		<td>46.401643</td>
		<td>11.241187</td>
		</tr>
		<tr>
		<td>Lingualeo - Terms of Service</td>
		<td>Terms of Service</td>
		<td>5293</td>
		<td>43.003285</td>
		<td>12.417816</td>
		</tr>
		<tr>
		<td>Discord - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>3482</td>
		<td>33.370855</td>
		<td>15.012362</td>
		</tr>
		<tr>
		<td>Discord - Terms of Service</td>
		<td>Terms of Service</td>
		<td>7313</td>
		<td>34.392771</td>
		<td>15.847401</td>
		</tr>
		<tr>
		<td>Airbnb - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4616</td>
		<td>33.860715</td>
		<td>14.802793</td>
		</tr>
		<tr>
		<td>Airbnb - Trackers Policy</td>
		<td>Trackers Policy</td>
		<td>1675</td>
		<td>39.553553</td>
		<td>14.677679</td>
		</tr>
		<tr>
		<td>Airbnb - Terms of Service</td>
		<td>Terms of Service</td>
		<td>10449</td>
		<td>42.149423</td>
		<td>12.810921</td>
		</tr>
		<tr>
		<td>Amazon - Acceptable Use Policy</td>
		<td>Acceptable Use Policy</td>
		<td>1031</td>
		<td>34.710243</td>
		<td>14.516258</td>
		</tr>
		<tr>
		<td>Amazon - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>3977</td>
		<td>29.887905</td>
		<td>16.198462</td>
		</tr>
		<tr>
		<td>Amazon - Commercial Terms</td>
		<td>Commercial Terms</td>
		<td>3499</td>
		<td>37.378754</td>
		<td>12.901882</td>
		</tr>
		<tr>
		<td>Amazon - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3545</td>
		<td>32.777493</td>
		<td>15.115823</td>
		</tr>
		<tr>
		<td>Vinted - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>20650</td>
		<td>56.501277</td>
		<td>9.586931</td>
		</tr>
		<tr>
		<td>Vinted - Terms of Service</td>
		<td>Terms of Service</td>
		<td>6883</td>
		<td>51.965055</td>
		<td>10.827947</td>
		</tr>
		<tr>
		<td>DeviantArt - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5858</td>
		<td>31.884879</td>
		<td>16.808129</td>
		</tr>
		<tr>
		<td>DeviantArt - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4186</td>
		<td>45.547564</td>
		<td>12.814988</td>
		</tr>
		<tr>
		<td>Pinterest - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4743</td>
		<td>46.873795</td>
		<td>12.733075</td>
		</tr>
		<tr>
		<td>Pinterest - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3202</td>
		<td>50.987325</td>
		<td>11.415607</td>
		</tr>
		<tr>
		<td>Goodreads - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>1013</td>
		<td>47.089651</td>
		<td>12.982703</td>
		</tr>
		<tr>
		<td>Goodreads - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3076</td>
		<td>36.476529</td>
		<td>14.816490</td>
		</tr>
		<tr>
		<td>CafeMom - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>3506</td>
		<td>30.546929</td>
		<td>16.775324</td>
		</tr>
		<tr>
		<td>CafeMom - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3738</td>
		<td>24.267887</td>
		<td>19.649428</td>
		</tr>
		<tr>
		<td>Google Play - Review Guidelines</td>
		<td>Review Guidelines</td>
		<td>20711</td>
		<td>36.199216</td>
		<td>14.394386</td>
		</tr>
		<tr>
		<td>Google Play - Brand Guidelines</td>
		<td>Brand Guidelines</td>
		<td>1951</td>
		<td>45.936711</td>
		<td>20.315490</td>
		</tr>
		<tr>
		<td>Google Play - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4598</td>
		<td>47.630137</td>
		<td>12.473682</td>
		</tr>
		<tr>
		<td>Google Play - Developer Terms</td>
		<td>Developer Terms</td>
		<td>5643</td>
		<td>32.817612</td>
		<td>16.928274</td>
		</tr>
		<tr>
		<td>Match - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4419</td>
		<td>37.811725</td>
		<td>14.258510</td>
		</tr>
		<tr>
		<td>Match - Terms of Service</td>
		<td>Terms of Service</td>
		<td>2511</td>
		<td>29.911028</td>
		<td>17.632578</td>
		</tr>
		<tr>
		<td>MouthShut - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>3177</td>
		<td>48.660826</td>
		<td>11.953059</td>
		</tr>
		<tr>
		<td>MouthShut - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4233</td>
		<td>43.644393</td>
		<td>13.014006</td>
		</tr>
		<tr>
		<td>Myspace - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>3453</td>
		<td>37.797019</td>
		<td>14.586029</td>
		</tr>
		<tr>
		<td>Myspace - Terms of Service</td>
		<td>Terms of Service</td>
		<td>15790</td>
		<td>34.532804</td>
		<td>15.680105</td>
		</tr>
		<tr>
		<td>Flickr - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5380</td>
		<td>29.915274</td>
		<td>16.595410</td>
		</tr>
		<tr>
		<td>Flickr - Terms of Service</td>
		<td>Terms of Service</td>
		<td>9132</td>
		<td>32.677317</td>
		<td>16.365833</td>
		</tr>
		<tr>
		<td>Google - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>9008</td>
		<td>39.015011</td>
		<td>15.725073</td>
		</tr>
		<tr>
		<td>Google - Terms of Service</td>
		<td>Terms of Service</td>
		<td>5030</td>
		<td>31.235471</td>
		<td>18.665046</td>
		</tr>
		<tr>
		<td>App Store - Review Guidelines</td>
		<td>Review Guidelines</td>
		<td>14083</td>
		<td>42.500204</td>
		<td>13.578920</td>
		</tr>
		<tr>
		<td>App Store - Developer Terms</td>
		<td>Developer Terms</td>
		<td>3948</td>
		<td>32.266332</td>
		<td>15.385803</td>
		</tr>
		<tr>
		<td>Vimeo - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>429</td>
		<td>-122.104878</td>
		<td>83.578287</td>
		</tr>
		<tr>
		<td>Vimeo - Terms of Service</td>
		<td>Terms of Service</td>
		<td>429</td>
		<td>-122.104878</td>
		<td>83.578287</td>
		</tr>
		<tr>
		<td>Yelp - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5278</td>
		<td>36.067483</td>
		<td>14.752032</td>
		</tr>
		<tr>
		<td>Yelp - Terms of Service</td>
		<td>Terms of Service</td>
		<td>6956</td>
		<td>41.300738</td>
		<td>13.183126</td>
		</tr>
		<tr>
		<td>Quora - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4410</td>
		<td>39.500697</td>
		<td>13.974585</td>
		</tr>
		<tr>
		<td>Quora - Terms of Service</td>
		<td>Terms of Service</td>
		<td>5799</td>
		<td>45.094889</td>
		<td>12.024349</td>
		</tr>
		<tr>
		<td>SNCF Pro - Terms of Service</td>
		<td>Terms of Service</td>
		<td>11010</td>
		<td>74.157171</td>
		<td>11.331864</td>
		</tr>
		<tr>
		<td>Tagged - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4812</td>
		<td>43.432063</td>
		<td>12.224262</td>
		</tr>
		<tr>
		<td>Tagged - Terms of Service</td>
		<td>Terms of Service</td>
		<td>6583</td>
		<td>31.393198</td>
		<td>16.705490</td>
		</tr>
		<tr>
		<td>Google Analytics - Data Controller Agreement</td>
		<td>Data Controller Agreement</td>
		<td>4118</td>
		<td>23.784803</td>
		<td>18.837703</td>
		</tr>
		<tr>
		<td>Google Analytics - Data Processor Agreement</td>
		<td>Data Processor Agreement</td>
		<td>7623</td>
		<td>27.436530</td>
		<td>15.745034</td>
		</tr>
		<tr>
		<td>Google Analytics - Parent Organization Privacy Policy</td>
		<td>Parent Organization Privacy Policy</td>
		<td>9008</td>
		<td>39.015011</td>
		<td>15.725073</td>
		</tr>
		<tr>
		<td>Google Analytics - Trackers Policy</td>
		<td>Trackers Policy</td>
		<td>1418</td>
		<td>55.537238</td>
		<td>11.017228</td>
		</tr>
		<tr>
		<td>Google Analytics - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3916</td>
		<td>37.912235</td>
		<td>14.634644</td>
		</tr>
		<tr>
		<td>Google Analytics - User Consent Policy</td>
		<td>User Consent Policy</td>
		<td>330</td>
		<td>33.365455</td>
		<td>16.803636</td>
		</tr>
		<tr>
		<td>Foursquare - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4820</td>
		<td>36.607001</td>
		<td>14.591140</td>
		</tr>
		<tr>
		<td>Foursquare - Terms of Service</td>
		<td>Terms of Service</td>
		<td>6633</td>
		<td>23.691978</td>
		<td>19.479755</td>
		</tr>
		<tr>
		<td>AdMob - Data Controller Agreement</td>
		<td>Data Controller Agreement</td>
		<td>3135</td>
		<td>26.542983</td>
		<td>17.192618</td>
		</tr>
		<tr>
		<td>AdMob - Trackers Policy</td>
		<td>Trackers Policy</td>
		<td>1418</td>
		<td>55.537238</td>
		<td>11.017228</td>
		</tr>
		<tr>
		<td>AdMob - User Consent Policy</td>
		<td>User Consent Policy</td>
		<td>330</td>
		<td>33.365455</td>
		<td>16.803636</td>
		</tr>
		<tr>
		<td>Mix - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>7594</td>
		<td>36.404078</td>
		<td>13.587309</td>
		</tr>
		<tr>
		<td>Mix - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4513</td>
		<td>27.351662</td>
		<td>17.811148</td>
		</tr>
		<tr>
		<td>eBay - Terms of Service</td>
		<td>Terms of Service</td>
		<td>9257</td>
		<td>31.107567</td>
		<td>16.933327</td>
		</tr>
		<tr>
		<td>Booking.com - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>11836</td>
		<td>46.660816</td>
		<td>12.309478</td>
		</tr>
		<tr>
		<td>Booking.com - Terms of Service</td>
		<td>Terms of Service</td>
		<td>6831</td>
		<td>32.851958</td>
		<td>15.867863</td>
		</tr>
		<tr>
		<td>AdSense - Data Controller Agreement</td>
		<td>Data Controller Agreement</td>
		<td>3135</td>
		<td>26.542983</td>
		<td>17.192618</td>
		</tr>
		<tr>
		<td>AdSense - Acceptable Use Policy</td>
		<td>Acceptable Use Policy</td>
		<td>2385</td>
		<td>17.501766</td>
		<td>19.661473</td>
		</tr>
		<tr>
		<td>AdSense - Brand Guidelines</td>
		<td>Brand Guidelines</td>
		<td>1322</td>
		<td>51.754527</td>
		<td>12.609043</td>
		</tr>
		<tr>
		<td>AdSense - Parent Organization Privacy Policy</td>
		<td>Parent Organization Privacy Policy</td>
		<td>9008</td>
		<td>39.015011</td>
		<td>15.725073</td>
		</tr>
		<tr>
		<td>AdSense - Quality Guidelines</td>
		<td>Quality Guidelines</td>
		<td>1480</td>
		<td>55.233123</td>
		<td>11.391499</td>
		</tr>
		<tr>
		<td>AdSense - Trackers Policy</td>
		<td>Trackers Policy</td>
		<td>1418</td>
		<td>55.537238</td>
		<td>11.017228</td>
		</tr>
		<tr>
		<td>AdSense - Program Policies</td>
		<td>Program Policies</td>
		<td>1453</td>
		<td>47.953489</td>
		<td>12.039956</td>
		</tr>
		<tr>
		<td>AdSense - Restricted Use Policy</td>
		<td>Restricted Use Policy</td>
		<td>996</td>
		<td>25.980713</td>
		<td>16.146965</td>
		</tr>
		<tr>
		<td>AdSense - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3403</td>
		<td>35.681632</td>
		<td>15.155627</td>
		</tr>
		<tr>
		<td>AdSense - User Consent Policy</td>
		<td>User Consent Policy</td>
		<td>330</td>
		<td>33.365455</td>
		<td>16.803636</td>
		</tr>
		<tr>
		<td>Stack Overflow - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5437</td>
		<td>23.832530</td>
		<td>17.834012</td>
		</tr>
		<tr>
		<td>Stack Overflow - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4455</td>
		<td>25.905468</td>
		<td>18.159467</td>
		</tr>
		<tr>
		<td>WeChat - Acceptable Use Policy</td>
		<td>Acceptable Use Policy</td>
		<td>1299</td>
		<td>-61.386626</td>
		<td>51.158603</td>
		</tr>
		<tr>
		<td>WeChat - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>10335</td>
		<td>31.528022</td>
		<td>16.391133</td>
		</tr>
		<tr>
		<td>WeChat - Terms of Service</td>
		<td>Terms of Service</td>
		<td>6938</td>
		<td>31.497627</td>
		<td>18.083114</td>
		</tr>
		<tr>
		<td>Facebook - Data Processor Agreement</td>
		<td>Data Processor Agreement</td>
		<td>1400</td>
		<td>36.071774</td>
		<td>16.316389</td>
		</tr>
		<tr>
		<td>Facebook - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5200</td>
		<td>44.512441</td>
		<td>14.390650</td>
		</tr>
		<tr>
		<td>Facebook - Commercial Terms</td>
		<td>Commercial Terms</td>
		<td>2769</td>
		<td>40.299362</td>
		<td>14.449235</td>
		</tr>
		<tr>
		<td>Facebook - Trackers Policy</td>
		<td>Trackers Policy</td>
		<td>2327</td>
		<td>49.310734</td>
		<td>12.804711</td>
		</tr>
		<tr>
		<td>Facebook - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4368</td>
		<td>46.609356</td>
		<td>13.104065</td>
		</tr>
		<tr>
		<td>Facebook - Developer Terms</td>
		<td>Developer Terms</td>
		<td>6417</td>
		<td>40.501539</td>
		<td>13.536427</td>
		</tr>
		<tr>
		<td>Viber - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5974</td>
		<td>35.867962</td>
		<td>16.026666</td>
		</tr>
		<tr>
		<td>Viber - Terms of Service</td>
		<td>Terms of Service</td>
		<td>6612</td>
		<td>47.321454</td>
		<td>12.342690</td>
		</tr>
		<tr>
		<td>ASKfm - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>7716</td>
		<td>46.008160</td>
		<td>12.795124</td>
		</tr>
		<tr>
		<td>ASKfm - Terms of Service</td>
		<td>Terms of Service</td>
		<td>9647</td>
		<td>41.796223</td>
		<td>13.872023</td>
		</tr>
		<tr>
		<td>Badoo - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5772</td>
		<td>34.007354</td>
		<td>16.901515</td>
		</tr>
		<tr>
		<td>Badoo - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4999</td>
		<td>46.566365</td>
		<td>13.036431</td>
		</tr>
		<tr>
		<td>LINE - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5463</td>
		<td>37.188204</td>
		<td>14.757844</td>
		</tr>
		<tr>
		<td>LINE - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3494</td>
		<td>25.149319</td>
		<td>20.084919</td>
		</tr>
		<tr>
		<td>hi5 - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4812</td>
		<td>43.432063</td>
		<td>12.224262</td>
		</tr>
		<tr>
		<td>hi5 - Terms of Service</td>
		<td>Terms of Service</td>
		<td>6583</td>
		<td>31.393198</td>
		<td>16.705490</td>
		</tr>
		<tr>
		<td>Veepee - Commercial Terms</td>
		<td>Commercial Terms</td>
		<td>9086</td>
		<td>44.837575</td>
		<td>22.154485</td>
		</tr>
		<tr>
		<td>Telegram - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4448</td>
		<td>53.460353</td>
		<td>10.825442</td>
		</tr>
		<tr>
		<td>Reddit - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4560</td>
		<td>31.383433</td>
		<td>15.747612</td>
		</tr>
		<tr>
		<td>Reddit - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3566</td>
		<td>37.191744</td>
		<td>14.939220</td>
		</tr>
		<tr>
		<td>Google APIs - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3708</td>
		<td>43.142944</td>
		<td>12.963309</td>
		</tr>
		<tr>
		<td>Google APIs - Developer Terms</td>
		<td>Developer Terms</td>
		<td>2308</td>
		<td>33.225199</td>
		<td>14.925865</td>
		</tr>
		<tr>
		<td>Meetup - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5218</td>
		<td>41.620161</td>
		<td>12.681153</td>
		</tr>
		<tr>
		<td>Meetup - Terms of Service</td>
		<td>Terms of Service</td>
		<td>8128</td>
		<td>44.611561</td>
		<td>12.724859</td>
		</tr>
		<tr>
		<td>Tencent - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>1548</td>
		<td>38.274013</td>
		<td>13.837276</td>
		</tr>
		<tr>
		<td>Tencent - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4872</td>
		<td>21.149217</td>
		<td>20.566560</td>
		</tr>
		<tr>
		<td>Facebook Ads - Terms of Service</td>
		<td>Terms of Service</td>
		<td>1685</td>
		<td>55.696362</td>
		<td>9.635367</td>
		</tr>
		<tr>
		<td>Ning - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5066</td>
		<td>40.014761</td>
		<td>13.757954</td>
		</tr>
		<tr>
		<td>Ning - Terms of Service</td>
		<td>Terms of Service</td>
		<td>12771</td>
		<td>33.411560</td>
		<td>16.262546</td>
		</tr>
		<tr>
		<td>Skype - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>16055</td>
		<td>39.936455</td>
		<td>13.267329</td>
		</tr>
		<tr>
		<td>Skype - Terms of Service</td>
		<td>Terms of Service</td>
		<td>11371</td>
		<td>47.733745</td>
		<td>11.471900</td>
		</tr>
		<tr>
		<td>Skype - Parent Organization Terms</td>
		<td>Parent Organization Terms</td>
		<td>11265</td>
		<td>47.915214</td>
		<td>11.351783</td>
		</tr>
		<tr>
		<td>TikTok - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4622</td>
		<td>43.301340</td>
		<td>13.426328</td>
		</tr>
		<tr>
		<td>TikTok - Copyright Claims Policy</td>
		<td>Copyright Claims Policy</td>
		<td>1391</td>
		<td>30.502085</td>
		<td>15.916162</td>
		</tr>
		<tr>
		<td>TikTok - In-App Purchases Policy</td>
		<td>In-App Purchases Policy</td>
		<td>2509</td>
		<td>42.289617</td>
		<td>14.210286</td>
		</tr>
		<tr>
		<td>TikTok - Community Guidelines</td>
		<td>Community Guidelines</td>
		<td>3381</td>
		<td>11.071110</td>
		<td>20.464449</td>
		</tr>
		<tr>
		<td>TikTok - Trackers Policy</td>
		<td>Trackers Policy</td>
		<td>1902</td>
		<td>35.143055</td>
		<td>15.205545</td>
		</tr>
		<tr>
		<td>TikTok - Terms of Service</td>
		<td>Terms of Service</td>
		<td>7880</td>
		<td>28.435537</td>
		<td>17.916981</td>
		</tr>
		<tr>
		<td>TikTok - Law Enforcement Guidelines</td>
		<td>Law Enforcement Guidelines</td>
		<td>2455</td>
		<td>34.609971</td>
		<td>13.735326</td>
		</tr>
		<tr>
		<td>Twitch - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4148</td>
		<td>27.969526</td>
		<td>16.416214</td>
		</tr>
		<tr>
		<td>Twitch - Terms of Service</td>
		<td>Terms of Service</td>
		<td>7561</td>
		<td>27.255197</td>
		<td>17.995789</td>
		</tr>
		<tr>
		<td>WeChat Open Platform - Software License Agreement</td>
		<td>Software License Agreement</td>
		<td>5756</td>
		<td>31.571853</td>
		<td>16.980409</td>
		</tr>
		<tr>
		<td>WeChat Open Platform - Parent Organization Terms</td>
		<td>Parent Organization Terms</td>
		<td>4872</td>
		<td>21.149217</td>
		<td>20.566560</td>
		</tr>
		<tr>
		<td>WeChat Open Platform - Developer Terms</td>
		<td>Developer Terms</td>
		<td>7914</td>
		<td>23.026242</td>
		<td>18.824675</td>
		</tr>
		<tr>
		<td>LiveJournal - Terms of Service</td>
		<td>Terms of Service</td>
		<td>2965</td>
		<td>41.752985</td>
		<td>11.693362</td>
		</tr>
		<tr>
		<td>Instagram - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>5140</td>
		<td>44.678008</td>
		<td>14.005343</td>
		</tr>
		<tr>
		<td>Instagram - Community Guidelines</td>
		<td>Community Guidelines</td>
		<td>1747</td>
		<td>48.254253</td>
		<td>11.953872</td>
		</tr>
		<tr>
		<td>Instagram - Terms of Service</td>
		<td>Terms of Service</td>
		<td>2537</td>
		<td>47.289177</td>
		<td>12.143972</td>
		</tr>
		<tr>
		<td>Instagram - Law Enforcement Guidelines</td>
		<td>Law Enforcement Guidelines</td>
		<td>1177</td>
		<td>31.192509</td>
		<td>15.129867</td>
		</tr>
		<tr>
		<td>Instagram - Developer Terms</td>
		<td>Developer Terms</td>
		<td>2406</td>
		<td>53.362365</td>
		<td>9.505963</td>
		</tr>
		<tr>
		<td>LibraryThing - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>1327</td>
		<td>48.707072</td>
		<td>11.386024</td>
		</tr>
		<tr>
		<td>LibraryThing - Community Guidelines</td>
		<td>Community Guidelines</td>
		<td>1357</td>
		<td>59.237271</td>
		<td>8.269894</td>
		</tr>
		<tr>
		<td>LibraryThing - Terms of Service</td>
		<td>Terms of Service</td>
		<td>2774</td>
		<td>40.801407</td>
		<td>12.869419</td>
		</tr>
		<tr>
		<td>Snapchat - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>4655</td>
		<td>46.948172</td>
		<td>12.015733</td>
		</tr>
		<tr>
		<td>Snapchat - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4702</td>
		<td>46.140242</td>
		<td>12.844865</td>
		</tr>
		<tr>
		<td>WhatsApp - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>3958</td>
		<td>34.494095</td>
		<td>15.091861</td>
		</tr>
		<tr>
		<td>WhatsApp - Terms of Service</td>
		<td>Terms of Service</td>
		<td>5378</td>
		<td>33.126174</td>
		<td>15.821929</td>
		</tr>
		<tr>
		<td>Last.fm - Privacy Policy</td>
		<td>Privacy Policy</td>
		<td>3448</td>
		<td>19.510116</td>
		<td>18.469348</td>
		</tr>
		<tr>
		<td>Last.fm - Terms of Service</td>
		<td>Terms of Service</td>
		<td>7153</td>
		<td>26.679826</td>
		<td>18.081319</td>
		</tr>
		<tr>
		<td>Facebook Payments - Terms of Service</td>
		<td>Terms of Service</td>
		<td>4681</td>
		<td>53.592448</td>
		<td>9.982419</td>
		</tr>
		<tr>
		<td>Facebook Payments - Developer Terms</td>
		<td>Developer Terms</td>
		<td>2834</td>
		<td>52.192333</td>
		<td>9.934852</td>
		</tr>
		<tr>
		<td>Google Ads - Data Controller Agreement</td>
		<td>Data Controller Agreement</td>
		<td>3135</td>
		<td>26.542983</td>
		<td>17.192618</td>
		</tr>
		<tr>
		<td>Google Ads - Data Processor Agreement</td>
		<td>Data Processor Agreement</td>
		<td>7623</td>
		<td>27.436530</td>
		<td>15.745034</td>
		</tr>
		<tr>
		<td>Google Ads - Parent Organization Privacy Policy</td>
		<td>Parent Organization Privacy Policy</td>
		<td>9008</td>
		<td>39.015011</td>
		<td>15.725073</td>
		</tr>
		<tr>
		<td>Google Ads - Trackers Policy</td>
		<td>Trackers Policy</td>
		<td>1418</td>
		<td>55.537238</td>
		<td>11.017228</td>
		</tr>
		<tr>
		<td>Google Ads - Program Policies</td>
		<td>Program Policies</td>
		<td>2774</td>
		<td>25.664130</td>
		<td>17.692940</td>
		</tr>
		<tr>
		<td>Google Ads - Terms of Service</td>
		<td>Terms of Service</td>
		<td>3825</td>
		<td>34.260576</td>
		<td>16.533518</td>
		</tr>
		<tr>
		<td>Google Ads - User Consent Policy</td>
		<td>User Consent Policy</td>
		<td>330</td>
		<td>33.365455</td>
		<td>16.803636</td>
		</tr>
		<tr>
		<td>Google Ads - Developer Terms</td>
		<td>Developer Terms</td>
		<td>2726</td>
		<td>43.618306</td>
		<td>12.866327</td>
		</tr>
	</tbody>
	</table>
</div>

## Stats by document types
<div markdown="0">
<table class="datatables">
  <thead>
    <tr>
      <th>Type</th>
      <th>num_docs</th>
      <th>mean_num_words</th>
      <th>ecart_type</th>
      <th>mean_readability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Quality Guidelines</td>
      <td>1</td>
      <td>1480.000000</td>
      <td>NaN</td>
      <td>55.233123</td>
    </tr>
    <tr>
      <td>Trackers Policy</td>
      <td>9</td>
      <td>2419.111111</td>
      <td>2271.088475</td>
      <td>49.975632</td>
    </tr>
    <tr>
      <td>Commercial Terms</td>
      <td>4</td>
      <td>11340.500000</td>
      <td>12760.852388</td>
      <td>48.856940</td>
    </tr>
    <tr>
      <td>Brand Guidelines</td>
      <td>2</td>
      <td>1636.500000</td>
      <td>444.770165</td>
      <td>48.845619</td>
    </tr>
    <tr>
      <td>In-App Purchases Policy</td>
      <td>1</td>
      <td>2509.000000</td>
      <td>NaN</td>
      <td>42.289617</td>
    </tr>
    <tr>
      <td>Community Guidelines</td>
      <td>3</td>
      <td>2161.666667</td>
      <td>1073.827423</td>
      <td>39.520878</td>
    </tr>
    <tr>
      <td>Review Guidelines</td>
      <td>2</td>
      <td>17397.000000</td>
      <td>4686.703746</td>
      <td>39.349710</td>
    </tr>
    <tr>
      <td>Parent Organization Privacy Policy</td>
      <td>3</td>
      <td>9008.000000</td>
      <td>0.000000</td>
      <td>39.015011</td>
    </tr>
    <tr>
      <td>Developer Terms</td>
      <td>9</td>
      <td>4359.555556</td>
      <td>2005.238397</td>
      <td>38.136047</td>
    </tr>
    <tr>
      <td>Copyright Claims Policy</td>
      <td>2</td>
      <td>1875.000000</td>
      <td>684.479364</td>
      <td>37.244855</td>
    </tr>
    <tr>
      <td>Program Policies</td>
      <td>2</td>
      <td>2113.500000</td>
      <td>934.088058</td>
      <td>36.808810</td>
    </tr>
    <tr>
      <td>Terms of Service</td>
      <td>54</td>
      <td>5826.833333</td>
      <td>2981.665893</td>
      <td>35.548055</td>
    </tr>
    <tr>
      <td>Privacy Policy</td>
      <td>45</td>
      <td>5477.022222</td>
      <td>3600.501963</td>
      <td>34.743870</td>
    </tr>
    <tr>
      <td>Parent Organization Terms</td>
      <td>2</td>
      <td>8068.500000</td>
      <td>4520.533652</td>
      <td>34.532216</td>
    </tr>
    <tr>
      <td>Law Enforcement Guidelines</td>
      <td>3</td>
      <td>2274.333333</td>
      <td>1019.082594</td>
      <td>33.696148</td>
    </tr>
    <tr>
      <td>User Consent Policy</td>
      <td>4</td>
      <td>330.000000</td>
      <td>0.000000</td>
      <td>33.365455</td>
    </tr>
    <tr>
      <td>Software License Agreement</td>
      <td>1</td>
      <td>5756.000000</td>
      <td>NaN</td>
      <td>31.571853</td>
    </tr>
    <tr>
      <td>Human Rights Policy</td>
      <td>1</td>
      <td>1495.000000</td>
      <td>NaN</td>
      <td>30.919436</td>
    </tr>
    <tr>
      <td>Data Processor Agreement</td>
      <td>3</td>
      <td>5548.666667</td>
      <td>3592.850725</td>
      <td>30.314945</td>
    </tr>
    <tr>
      <td>Restricted Use Policy</td>
      <td>1</td>
      <td>996.000000</td>
      <td>NaN</td>
      <td>25.980713</td>
    </tr>
    <tr>
      <td>Data Controller Agreement</td>
      <td>4</td>
      <td>3380.750000</td>
      <td>491.500000</td>
      <td>25.853438</td>
    </tr>
    <tr>
      <td>Acceptable Use Policy</td>
      <td>3</td>
      <td>1571.666667</td>
      <td>717.000232</td>
      <td>-3.058206</td>
    </tr>
  </tbody>
</table>
</div>

### Légende
<div markdown="0">
<table>
<thead><tr>
<th>Score</th>
<th>School level</th>
<th>Notes</th>
</tr>
</thead>
<tbody>
<tr>
<td>100.00–90.00</td>
<td>5th grade</td>
<td>Very easy to read. Easily understood by an average 11-year-old student.</td>
</tr>
<tr>
<td>90.0–80.0</td>
<td>6th grade</td>
<td>Easy to read. Conversational English for consumers.</td>
</tr>
<tr>
<td>80.0–70.0</td>
<td>7th grade</td>
<td>Fairly easy to read.</td>
</tr>
<tr>
<td>70.0–60.0</td>
<td>8th &amp; 9th grade</td>
<td>Plain English. Easily understood by 13- to 15-year-old students.</td>
</tr>
<tr>
<td>60.0–50.0</td>
<td>10th to 12th grade</td>
<td>Fairly difficult to read.</td>
</tr>
<tr>
<td>50.0–30.0</td>
<td>College</td>
<td>Difficult to read.</td>
</tr>
<tr>
<td>30.0–10.0</td>
<td>College graduate</td>
<td>Very difficult to read. Best understood by university graduates.</td>
</tr>
<tr>
<td>10.0–0.0</td>
<td>Professional</td>
<td>Extremely difficult to read. Best understood by university graduates.</td>
</tr>
</tbody>
</table>
</div>