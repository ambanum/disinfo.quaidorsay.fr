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

## Évolution de la lisibilité dans le temps

{% include cguschart.html %}

<script type="text/javascript">
	const infoLabel = "{{ site.data.translations.cgus.datatables.info[page.lang] }}";
</script>

## Jeu de donées
Qui duis commodo ipsum sint Lorem esse et elit duis Lorem enim. Cillum ipsum consectetur est exercitation quis tempor qui. Laboris occaecat ex elit nulla excepteur. Sunt Lorem consequat consequat cillum elit nisi nostrud velit culpa cillum incididunt nisi aliquip fugiat. Laborum proident eu deserunt reprehenderit sint nostrud adipisicing nostrud. Minim ut proident culpa enim qui quis incididunt. Enim mollit veniam laboris velit qui reprehenderit.

## Stats
<div markdown="0">
	<table class="datatables datatables-cgus">
	<thead>
		<tr>
		<th>Service</th>
		<th>Type</th>
		<th>Nb de mots</th>
		<th>Readability</th>
		<th>Readability level</th>
		</tr>
	</thead>
	<tbody>
		<tr>
		<td>Cdiscount</td>
		<td>Commercial Terms</td>
		<td>30008</td>
		<td>72.91</td>
		<td>11.79</td>
		</tr>
		<tr>
		<td>Cdiscount</td>
		<td>Trackers Policy</td>
		<td>8420</td>
		<td>60.29</td>
		<td>16.15</td>
		</tr>
		<tr>
		<td>Cdiscount</td>
		<td>Terms of Service</td>
		<td>4455</td>
		<td>58.57</td>
		<td>17.52</td>
		</tr>
		<tr>
		<td>Apple</td>
		<td>Human Rights Policy</td>
		<td>1495</td>
		<td>30.91</td>
		<td>16.08</td>
		</tr>
		<tr>
		<td>Apple</td>
		<td>Privacy Policy</td>
		<td>4641</td>
		<td>28.08</td>
		<td>16.33</td>
		</tr>
		<tr>
		<td>We Heart It</td>
		<td>Privacy Policy</td>
		<td>6308</td>
		<td>23.60</td>
		<td>18.17</td>
		</tr>
		<tr>
		<td>We Heart It</td>
		<td>Terms of Service</td>
		<td>10137</td>
		<td>30.78</td>
		<td>17.33</td>
		</tr>
		<tr>
		<td>Twitter</td>
		<td>Privacy Policy</td>
		<td>7401</td>
		<td>38.93</td>
		<td>15.33</td>
		</tr>
		<tr>
		<td>Twitter</td>
		<td>Copyright Claims Policy</td>
		<td>2359</td>
		<td>43.98</td>
		<td>12.65</td>
		</tr>
		<tr>
		<td>Twitter</td>
		<td>Trackers Policy</td>
		<td>1776</td>
		<td>43.33</td>
		<td>13.60</td>
		</tr>
		<tr>
		<td>Twitter</td>
		<td>Terms of Service</td>
		<td>3095</td>
		<td>32.09</td>
		<td>17.05</td>
		</tr>
		<tr>
		<td>Twitter</td>
		<td>Law Enforcement Guidelines</td>
		<td>3191</td>
		<td>35.28</td>
		<td>14.99</td>
		</tr>
		<tr>
		<td>Twitter</td>
		<td>Developer Terms</td>
		<td>5040</td>
		<td>32.21</td>
		<td>15.22</td>
		</tr>
		<tr>
		<td>Lingualeo</td>
		<td>Privacy Policy</td>
		<td>753</td>
		<td>46.40</td>
		<td>11.24</td>
		</tr>
		<tr>
		<td>Lingualeo</td>
		<td>Terms of Service</td>
		<td>5293</td>
		<td>43.00</td>
		<td>12.41</td>
		</tr>
		<tr>
		<td>Discord</td>
		<td>Privacy Policy</td>
		<td>3482</td>
		<td>33.37</td>
		<td>15.01</td>
		</tr>
		<tr>
		<td>Discord</td>
		<td>Terms of Service</td>
		<td>7313</td>
		<td>34.39</td>
		<td>15.84</td>
		</tr>
		<tr>
		<td>Airbnb</td>
		<td>Privacy Policy</td>
		<td>4616</td>
		<td>33.86</td>
		<td>14.80</td>
		</tr>
		<tr>
		<td>Airbnb</td>
		<td>Trackers Policy</td>
		<td>1675</td>
		<td>39.55</td>
		<td>14.67</td>
		</tr>
		<tr>
		<td>Airbnb</td>
		<td>Terms of Service</td>
		<td>10449</td>
		<td>42.14</td>
		<td>12.81</td>
		</tr>
		<tr>
		<td>Amazon</td>
		<td>Acceptable Use Policy</td>
		<td>1031</td>
		<td>34.71</td>
		<td>14.51</td>
		</tr>
		<tr>
		<td>Amazon</td>
		<td>Privacy Policy</td>
		<td>3977</td>
		<td>29.88</td>
		<td>16.19</td>
		</tr>
		<tr>
		<td>Amazon</td>
		<td>Commercial Terms</td>
		<td>3499</td>
		<td>37.37</td>
		<td>12.90</td>
		</tr>
		<tr>
		<td>Amazon</td>
		<td>Terms of Service</td>
		<td>3545</td>
		<td>32.77</td>
		<td>15.11</td>
		</tr>
		<tr>
		<td>Vinted</td>
		<td>Privacy Policy</td>
		<td>20650</td>
		<td>56.50</td>
		<td>9.58</td>
		</tr>
		<tr>
		<td>Vinted</td>
		<td>Terms of Service</td>
		<td>6883</td>
		<td>51.96</td>
		<td>10.82</td>
		</tr>
		<tr>
		<td>DeviantArt</td>
		<td>Privacy Policy</td>
		<td>5858</td>
		<td>31.88</td>
		<td>16.80</td>
		</tr>
		<tr>
		<td>DeviantArt</td>
		<td>Terms of Service</td>
		<td>4186</td>
		<td>45.54</td>
		<td>12.81</td>
		</tr>
		<tr>
		<td>Pinterest</td>
		<td>Privacy Policy</td>
		<td>4743</td>
		<td>46.87</td>
		<td>12.73</td>
		</tr>
		<tr>
		<td>Pinterest</td>
		<td>Terms of Service</td>
		<td>3202</td>
		<td>50.98</td>
		<td>11.41</td>
		</tr>
		<tr>
		<td>Goodreads</td>
		<td>Privacy Policy</td>
		<td>1013</td>
		<td>47.08</td>
		<td>12.98</td>
		</tr>
		<tr>
		<td>Goodreads</td>
		<td>Terms of Service</td>
		<td>3076</td>
		<td>36.47</td>
		<td>14.81</td>
		</tr>
		<tr>
		<td>CafeMom</td>
		<td>Privacy Policy</td>
		<td>3506</td>
		<td>30.54</td>
		<td>16.77</td>
		</tr>
		<tr>
		<td>CafeMom</td>
		<td>Terms of Service</td>
		<td>3738</td>
		<td>24.26</td>
		<td>19.64</td>
		</tr>
		<tr>
		<td>Google Play</td>
		<td>Review Guidelines</td>
		<td>20711</td>
		<td>36.19</td>
		<td>14.39</td>
		</tr>
		<tr>
		<td>Google Play</td>
		<td>Brand Guidelines</td>
		<td>1951</td>
		<td>45.93</td>
		<td>20.31</td>
		</tr>
		<tr>
		<td>Google Play</td>
		<td>Terms of Service</td>
		<td>4598</td>
		<td>47.63</td>
		<td>12.47</td>
		</tr>
		<tr>
		<td>Google Play</td>
		<td>Developer Terms</td>
		<td>5643</td>
		<td>32.81</td>
		<td>16.92</td>
		</tr>
		<tr>
		<td>Match</td>
		<td>Privacy Policy</td>
		<td>4419</td>
		<td>37.81</td>
		<td>14.25</td>
		</tr>
		<tr>
		<td>Match</td>
		<td>Terms of Service</td>
		<td>2511</td>
		<td>29.91</td>
		<td>17.63</td>
		</tr>
		<tr>
		<td>MouthShut</td>
		<td>Privacy Policy</td>
		<td>3177</td>
		<td>48.66</td>
		<td>11.95</td>
		</tr>
		<tr>
		<td>MouthShut</td>
		<td>Terms of Service</td>
		<td>4233</td>
		<td>43.64</td>
		<td>13.01</td>
		</tr>
		<tr>
		<td>Myspace</td>
		<td>Privacy Policy</td>
		<td>3453</td>
		<td>37.79</td>
		<td>14.58</td>
		</tr>
		<tr>
		<td>Myspace</td>
		<td>Terms of Service</td>
		<td>15790</td>
		<td>34.53</td>
		<td>15.68</td>
		</tr>
		<tr>
		<td>Flickr</td>
		<td>Privacy Policy</td>
		<td>5380</td>
		<td>29.91</td>
		<td>16.59</td>
		</tr>
		<tr>
		<td>Flickr</td>
		<td>Terms of Service</td>
		<td>9132</td>
		<td>32.67</td>
		<td>16.36</td>
		</tr>
		<tr>
		<td>Google</td>
		<td>Privacy Policy</td>
		<td>9008</td>
		<td>39.01</td>
		<td>15.72</td>
		</tr>
		<tr>
		<td>Google</td>
		<td>Terms of Service</td>
		<td>5030</td>
		<td>31.23</td>
		<td>18.66</td>
		</tr>
		<tr>
		<td>App Store</td>
		<td>Review Guidelines</td>
		<td>14083</td>
		<td>42.50</td>
		<td>13.57</td>
		</tr>
		<tr>
		<td>App Store</td>
		<td>Developer Terms</td>
		<td>3948</td>
		<td>32.26</td>
		<td>15.38</td>
		</tr>
		<tr>
		<td>Vimeo</td>
		<td>Privacy Policy</td>
		<td>429</td>
		<td>-122.10</td>
		<td>83.57</td>
		</tr>
		<tr>
		<td>Vimeo</td>
		<td>Terms of Service</td>
		<td>429</td>
		<td>-122.10</td>
		<td>83.57</td>
		</tr>
		<tr>
		<td>Yelp</td>
		<td>Privacy Policy</td>
		<td>5278</td>
		<td>36.06</td>
		<td>14.75</td>
		</tr>
		<tr>
		<td>Yelp</td>
		<td>Terms of Service</td>
		<td>6956</td>
		<td>41.30</td>
		<td>13.18</td>
		</tr>
		<tr>
		<td>Quora</td>
		<td>Privacy Policy</td>
		<td>4410</td>
		<td>39.50</td>
		<td>13.97</td>
		</tr>
		<tr>
		<td>Quora</td>
		<td>Terms of Service</td>
		<td>5799</td>
		<td>45.09</td>
		<td>12.02</td>
		</tr>
		<tr>
		<td>SNCF Pro</td>
		<td>Terms of Service</td>
		<td>11010</td>
		<td>74.15</td>
		<td>11.33</td>
		</tr>
		<tr>
		<td>Tagged</td>
		<td>Privacy Policy</td>
		<td>4812</td>
		<td>43.43</td>
		<td>12.22</td>
		</tr>
		<tr>
		<td>Tagged</td>
		<td>Terms of Service</td>
		<td>6583</td>
		<td>31.39</td>
		<td>16.70</td>
		</tr>
		<tr>
		<td>Google Analytics</td>
		<td>Data Controller Agreement</td>
		<td>4118</td>
		<td>23.78</td>
		<td>18.83</td>
		</tr>
		<tr>
		<td>Google Analytics</td>
		<td>Data Processor Agreement</td>
		<td>7623</td>
		<td>27.43</td>
		<td>15.74</td>
		</tr>
		<tr>
		<td>Google Analytics</td>
		<td>Parent Organization Privacy Policy</td>
		<td>9008</td>
		<td>39.01</td>
		<td>15.72</td>
		</tr>
		<tr>
		<td>Google Analytics</td>
		<td>Trackers Policy</td>
		<td>1418</td>
		<td>55.53</td>
		<td>11.01</td>
		</tr>
		<tr>
		<td>Google Analytics</td>
		<td>Terms of Service</td>
		<td>3916</td>
		<td>37.91</td>
		<td>14.63</td>
		</tr>
		<tr>
		<td>Google Analytics</td>
		<td>User Consent Policy</td>
		<td>330</td>
		<td>33.36</td>
		<td>16.80</td>
		</tr>
		<tr>
		<td>Foursquare</td>
		<td>Privacy Policy</td>
		<td>4820</td>
		<td>36.60</td>
		<td>14.59</td>
		</tr>
		<tr>
		<td>Foursquare</td>
		<td>Terms of Service</td>
		<td>6633</td>
		<td>23.69</td>
		<td>19.47</td>
		</tr>
		<tr>
		<td>AdMob</td>
		<td>Data Controller Agreement</td>
		<td>3135</td>
		<td>26.54</td>
		<td>17.19</td>
		</tr>
		<tr>
		<td>AdMob</td>
		<td>Trackers Policy</td>
		<td>1418</td>
		<td>55.53</td>
		<td>11.01</td>
		</tr>
		<tr>
		<td>AdMob</td>
		<td>User Consent Policy</td>
		<td>330</td>
		<td>33.36</td>
		<td>16.80</td>
		</tr>
		<tr>
		<td>Mix</td>
		<td>Privacy Policy</td>
		<td>7594</td>
		<td>36.40</td>
		<td>13.58</td>
		</tr>
		<tr>
		<td>Mix</td>
		<td>Terms of Service</td>
		<td>4513</td>
		<td>27.35</td>
		<td>17.81</td>
		</tr>
		<tr>
		<td>eBay</td>
		<td>Terms of Service</td>
		<td>9257</td>
		<td>31.10</td>
		<td>16.93</td>
		</tr>
		<tr>
		<td>Booking.com</td>
		<td>Privacy Policy</td>
		<td>11836</td>
		<td>46.66</td>
		<td>12.30</td>
		</tr>
		<tr>
		<td>Booking.com</td>
		<td>Terms of Service</td>
		<td>6831</td>
		<td>32.85</td>
		<td>15.86</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>Data Controller Agreement</td>
		<td>3135</td>
		<td>26.54</td>
		<td>17.19</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>Acceptable Use Policy</td>
		<td>2385</td>
		<td>17.50</td>
		<td>19.66</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>Brand Guidelines</td>
		<td>1322</td>
		<td>51.75</td>
		<td>12.60</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>Parent Organization Privacy Policy</td>
		<td>9008</td>
		<td>39.01</td>
		<td>15.72</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>Quality Guidelines</td>
		<td>1480</td>
		<td>55.23</td>
		<td>11.39</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>Trackers Policy</td>
		<td>1418</td>
		<td>55.53</td>
		<td>11.01</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>Program Policies</td>
		<td>1453</td>
		<td>47.95</td>
		<td>12.03</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>Restricted Use Policy</td>
		<td>996</td>
		<td>25.98</td>
		<td>16.14</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>Terms of Service</td>
		<td>3403</td>
		<td>35.68</td>
		<td>15.15</td>
		</tr>
		<tr>
		<td>AdSense</td>
		<td>User Consent Policy</td>
		<td>330</td>
		<td>33.36</td>
		<td>16.80</td>
		</tr>
		<tr>
		<td>Stack Overflow</td>
		<td>Privacy Policy</td>
		<td>5437</td>
		<td>23.83</td>
		<td>17.83</td>
		</tr>
		<tr>
		<td>Stack Overflow</td>
		<td>Terms of Service</td>
		<td>4455</td>
		<td>25.90</td>
		<td>18.15</td>
		</tr>
		<tr>
		<td>WeChat</td>
		<td>Acceptable Use Policy</td>
		<td>1299</td>
		<td>-61.38</td>
		<td>51.15</td>
		</tr>
		<tr>
		<td>WeChat</td>
		<td>Privacy Policy</td>
		<td>10335</td>
		<td>31.52</td>
		<td>16.39</td>
		</tr>
		<tr>
		<td>WeChat</td>
		<td>Terms of Service</td>
		<td>6938</td>
		<td>31.49</td>
		<td>18.08</td>
		</tr>
		<tr>
		<td>Facebook</td>
		<td>Data Processor Agreement</td>
		<td>1400</td>
		<td>36.07</td>
		<td>16.31</td>
		</tr>
		<tr>
		<td>Facebook</td>
		<td>Privacy Policy</td>
		<td>5200</td>
		<td>44.51</td>
		<td>14.39</td>
		</tr>
		<tr>
		<td>Facebook</td>
		<td>Commercial Terms</td>
		<td>2769</td>
		<td>40.29</td>
		<td>14.44</td>
		</tr>
		<tr>
		<td>Facebook</td>
		<td>Trackers Policy</td>
		<td>2327</td>
		<td>49.31</td>
		<td>12.80</td>
		</tr>
		<tr>
		<td>Facebook</td>
		<td>Terms of Service</td>
		<td>4368</td>
		<td>46.60</td>
		<td>13.10</td>
		</tr>
		<tr>
		<td>Facebook</td>
		<td>Developer Terms</td>
		<td>6417</td>
		<td>40.50</td>
		<td>13.53</td>
		</tr>
		<tr>
		<td>Viber</td>
		<td>Privacy Policy</td>
		<td>5974</td>
		<td>35.86</td>
		<td>16.02</td>
		</tr>
		<tr>
		<td>Viber</td>
		<td>Terms of Service</td>
		<td>6612</td>
		<td>47.32</td>
		<td>12.34</td>
		</tr>
		<tr>
		<td>ASKfm</td>
		<td>Privacy Policy</td>
		<td>7716</td>
		<td>46.00</td>
		<td>12.79</td>
		</tr>
		<tr>
		<td>ASKfm</td>
		<td>Terms of Service</td>
		<td>9647</td>
		<td>41.79</td>
		<td>13.87</td>
		</tr>
		<tr>
		<td>Badoo</td>
		<td>Privacy Policy</td>
		<td>5772</td>
		<td>34.00</td>
		<td>16.90</td>
		</tr>
		<tr>
		<td>Badoo</td>
		<td>Terms of Service</td>
		<td>4999</td>
		<td>46.56</td>
		<td>13.03</td>
		</tr>
		<tr>
		<td>LINE</td>
		<td>Privacy Policy</td>
		<td>5463</td>
		<td>37.18</td>
		<td>14.75</td>
		</tr>
		<tr>
		<td>LINE</td>
		<td>Terms of Service</td>
		<td>3494</td>
		<td>25.14</td>
		<td>20.08</td>
		</tr>
		<tr>
		<td>hi5</td>
		<td>Privacy Policy</td>
		<td>4812</td>
		<td>43.43</td>
		<td>12.22</td>
		</tr>
		<tr>
		<td>hi5</td>
		<td>Terms of Service</td>
		<td>6583</td>
		<td>31.39</td>
		<td>16.70</td>
		</tr>
		<tr>
		<td>Veepee</td>
		<td>Commercial Terms</td>
		<td>9086</td>
		<td>44.83</td>
		<td>22.15</td>
		</tr>
		<tr>
		<td>Telegram</td>
		<td>Privacy Policy</td>
		<td>4448</td>
		<td>53.46</td>
		<td>10.82</td>
		</tr>
		<tr>
		<td>Reddit</td>
		<td>Privacy Policy</td>
		<td>4560</td>
		<td>31.38</td>
		<td>15.74</td>
		</tr>
		<tr>
		<td>Reddit</td>
		<td>Terms of Service</td>
		<td>3566</td>
		<td>37.19</td>
		<td>14.93</td>
		</tr>
		<tr>
		<td>Google APIs</td>
		<td>Terms of Service</td>
		<td>3708</td>
		<td>43.14</td>
		<td>12.96</td>
		</tr>
		<tr>
		<td>Google APIs</td>
		<td>Developer Terms</td>
		<td>2308</td>
		<td>33.22</td>
		<td>14.92</td>
		</tr>
		<tr>
		<td>Meetup</td>
		<td>Privacy Policy</td>
		<td>5218</td>
		<td>41.62</td>
		<td>12.68</td>
		</tr>
		<tr>
		<td>Meetup</td>
		<td>Terms of Service</td>
		<td>8128</td>
		<td>44.61</td>
		<td>12.72</td>
		</tr>
		<tr>
		<td>Tencent</td>
		<td>Privacy Policy</td>
		<td>1548</td>
		<td>38.27</td>
		<td>13.83</td>
		</tr>
		<tr>
		<td>Tencent</td>
		<td>Terms of Service</td>
		<td>4872</td>
		<td>21.14</td>
		<td>20.56</td>
		</tr>
		<tr>
		<td>Facebook Ads</td>
		<td>Terms of Service</td>
		<td>1685</td>
		<td>55.69</td>
		<td>9.63</td>
		</tr>
		<tr>
		<td>Ning</td>
		<td>Privacy Policy</td>
		<td>5066</td>
		<td>40.01</td>
		<td>13.75</td>
		</tr>
		<tr>
		<td>Ning</td>
		<td>Terms of Service</td>
		<td>12771</td>
		<td>33.41</td>
		<td>16.26</td>
		</tr>
		<tr>
		<td>Skype</td>
		<td>Privacy Policy</td>
		<td>16055</td>
		<td>39.93</td>
		<td>13.26</td>
		</tr>
		<tr>
		<td>Skype</td>
		<td>Terms of Service</td>
		<td>11371</td>
		<td>47.73</td>
		<td>11.47</td>
		</tr>
		<tr>
		<td>Skype</td>
		<td>Parent Organization Terms</td>
		<td>11265</td>
		<td>47.91</td>
		<td>11.35</td>
		</tr>
		<tr>
		<td>TikTok</td>
		<td>Privacy Policy</td>
		<td>4622</td>
		<td>43.30</td>
		<td>13.42</td>
		</tr>
		<tr>
		<td>TikTok</td>
		<td>Copyright Claims Policy</td>
		<td>1391</td>
		<td>30.50</td>
		<td>15.91</td>
		</tr>
		<tr>
		<td>TikTok</td>
		<td>In-App Purchases Policy</td>
		<td>2509</td>
		<td>42.28</td>
		<td>14.21</td>
		</tr>
		<tr>
		<td>TikTok</td>
		<td>Community Guidelines</td>
		<td>3381</td>
		<td>11.07</td>
		<td>20.46</td>
		</tr>
		<tr>
		<td>TikTok</td>
		<td>Trackers Policy</td>
		<td>1902</td>
		<td>35.14</td>
		<td>15.20</td>
		</tr>
		<tr>
		<td>TikTok</td>
		<td>Terms of Service</td>
		<td>7880</td>
		<td>28.43</td>
		<td>17.91</td>
		</tr>
		<tr>
		<td>TikTok</td>
		<td>Law Enforcement Guidelines</td>
		<td>2455</td>
		<td>34.60</td>
		<td>13.73</td>
		</tr>
		<tr>
		<td>Twitch</td>
		<td>Privacy Policy</td>
		<td>4148</td>
		<td>27.96</td>
		<td>16.41</td>
		</tr>
		<tr>
		<td>Twitch</td>
		<td>Terms of Service</td>
		<td>7561</td>
		<td>27.25</td>
		<td>17.99</td>
		</tr>
		<tr>
		<td>WeChat Open Platform</td>
		<td>Software License Agreement</td>
		<td>5756</td>
		<td>31.57</td>
		<td>16.98</td>
		</tr>
		<tr>
		<td>WeChat Open Platform</td>
		<td>Parent Organization Terms</td>
		<td>4872</td>
		<td>21.14</td>
		<td>20.56</td>
		</tr>
		<tr>
		<td>WeChat Open Platform</td>
		<td>Developer Terms</td>
		<td>7914</td>
		<td>23.02</td>
		<td>18.82</td>
		</tr>
		<tr>
		<td>LiveJournal</td>
		<td>Terms of Service</td>
		<td>2965</td>
		<td>41.75</td>
		<td>11.69</td>
		</tr>
		<tr>
		<td>Instagram</td>
		<td>Privacy Policy</td>
		<td>5140</td>
		<td>44.67</td>
		<td>14.00</td>
		</tr>
		<tr>
		<td>Instagram</td>
		<td>Community Guidelines</td>
		<td>1747</td>
		<td>48.25</td>
		<td>11.95</td>
		</tr>
		<tr>
		<td>Instagram</td>
		<td>Terms of Service</td>
		<td>2537</td>
		<td>47.28</td>
		<td>12.14</td>
		</tr>
		<tr>
		<td>Instagram</td>
		<td>Law Enforcement Guidelines</td>
		<td>1177</td>
		<td>31.19</td>
		<td>15.12</td>
		</tr>
		<tr>
		<td>Instagram</td>
		<td>Developer Terms</td>
		<td>2406</td>
		<td>53.36</td>
		<td>9.50</td>
		</tr>
		<tr>
		<td>LibraryThing</td>
		<td>Privacy Policy</td>
		<td>1327</td>
		<td>48.70</td>
		<td>11.38</td>
		</tr>
		<tr>
		<td>LibraryThing</td>
		<td>Community Guidelines</td>
		<td>1357</td>
		<td>59.23</td>
		<td>8.26</td>
		</tr>
		<tr>
		<td>LibraryThing</td>
		<td>Terms of Service</td>
		<td>2774</td>
		<td>40.80</td>
		<td>12.86</td>
		</tr>
		<tr>
		<td>Snapchat</td>
		<td>Privacy Policy</td>
		<td>4655</td>
		<td>46.94</td>
		<td>12.01</td>
		</tr>
		<tr>
		<td>Snapchat</td>
		<td>Terms of Service</td>
		<td>4702</td>
		<td>46.14</td>
		<td>12.84</td>
		</tr>
		<tr>
		<td>WhatsApp</td>
		<td>Privacy Policy</td>
		<td>3958</td>
		<td>34.49</td>
		<td>15.09</td>
		</tr>
		<tr>
		<td>WhatsApp</td>
		<td>Terms of Service</td>
		<td>5378</td>
		<td>33.12</td>
		<td>15.82</td>
		</tr>
		<tr>
		<td>Last.fm</td>
		<td>Privacy Policy</td>
		<td>3448</td>
		<td>19.51</td>
		<td>18.46</td>
		</tr>
		<tr>
		<td>Last.fm</td>
		<td>Terms of Service</td>
		<td>7153</td>
		<td>26.67</td>
		<td>18.08</td>
		</tr>
		<tr>
		<td>Facebook Payments</td>
		<td>Terms of Service</td>
		<td>4681</td>
		<td>53.59</td>
		<td>9.98</td>
		</tr>
		<tr>
		<td>Facebook Payments</td>
		<td>Developer Terms</td>
		<td>2834</td>
		<td>52.19</td>
		<td>9.93</td>
		</tr>
		<tr>
		<td>Google Ads</td>
		<td>Data Controller Agreement</td>
		<td>3135</td>
		<td>26.54</td>
		<td>17.19</td>
		</tr>
		<tr>
		<td>Google Ads</td>
		<td>Data Processor Agreement</td>
		<td>7623</td>
		<td>27.43</td>
		<td>15.74</td>
		</tr>
		<tr>
		<td>Google Ads</td>
		<td>Parent Organization Privacy Policy</td>
		<td>9008</td>
		<td>39.01</td>
		<td>15.72</td>
		</tr>
		<tr>
		<td>Google Ads</td>
		<td>Trackers Policy</td>
		<td>1418</td>
		<td>55.53</td>
		<td>11.01</td>
		</tr>
		<tr>
		<td>Google Ads</td>
		<td>Program Policies</td>
		<td>2774</td>
		<td>25.66</td>
		<td>17.69</td>
		</tr>
		<tr>
		<td>Google Ads</td>
		<td>Terms of Service</td>
		<td>3825</td>
		<td>34.26</td>
		<td>16.53</td>
		</tr>
		<tr>
		<td>Google Ads</td>
		<td>User Consent Policy</td>
		<td>330</td>
		<td>33.36</td>
		<td>16.80</td>
		</tr>
		<tr>
		<td>Google Ads</td>
		<td>Developer Terms</td>
		<td>2726</td>
		<td>43.61</td>
		<td>12.86</td>
		</tr>
	</tbody>
	</table>
</div>

## Stats by document types
<div markdown="0">
<table class="datatables datatables-cgus">
  <thead>
    <tr>
      <th>Type</th>
      <th>Nb de documents</th>
      <th>mean_num_words</th>
      <th>Écart type</th>
      <th>mean_readability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Quality Guidelines</td>
      <td>1</td>
      <td>1480</td>
      <td>-</td>
      <td>55.23</td>
    </tr>
    <tr>
      <td>Trackers Policy</td>
      <td>9</td>
      <td>2419.11</td>
      <td>2271.08</td>
      <td>49.97</td>
    </tr>
    <tr>
      <td>Commercial Terms</td>
      <td>4</td>
      <td>11340.50</td>
      <td>12760.85</td>
      <td>48.85</td>
    </tr>
    <tr>
      <td>Brand Guidelines</td>
      <td>2</td>
      <td>1636.50</td>
      <td>444.77</td>
      <td>48.84</td>
    </tr>
    <tr>
      <td>In-App Purchases Policy</td>
      <td>1</td>
      <td>2509</td>
      <td>-</td>
      <td>42.28</td>
    </tr>
    <tr>
      <td>Community Guidelines</td>
      <td>3</td>
      <td>2161.66</td>
      <td>1073.82</td>
      <td>39.52</td>
    </tr>
    <tr>
      <td>Review Guidelines</td>
      <td>2</td>
      <td>17397</td>
      <td>4686.70</td>
      <td>39.34</td>
    </tr>
    <tr>
      <td>Parent Organization Privacy Policy</td>
      <td>3</td>
      <td>9008</td>
      <td>0</td>
      <td>39.01</td>
    </tr>
    <tr>
      <td>Developer Terms</td>
      <td>9</td>
      <td>4359.55</td>
      <td>2005.23</td>
      <td>38.13</td>
    </tr>
    <tr>
      <td>Copyright Claims Policy</td>
      <td>2</td>
      <td>1875</td>
      <td>684.47</td>
      <td>37.24</td>
    </tr>
    <tr>
      <td>Program Policies</td>
      <td>2</td>
      <td>2113.50</td>
      <td>934.08</td>
      <td>36.80</td>
    </tr>
    <tr>
      <td>Terms of Service</td>
      <td>54</td>
      <td>5826.83</td>
      <td>2981.66</td>
      <td>35.54</td>
    </tr>
    <tr>
      <td>Privacy Policy</td>
      <td>45</td>
      <td>5477.02</td>
      <td>3600.50</td>
      <td>34.74</td>
    </tr>
    <tr>
      <td>Parent Organization Terms</td>
      <td>2</td>
      <td>8068.50</td>
      <td>4520.53</td>
      <td>34.53</td>
    </tr>
    <tr>
      <td>Law Enforcement Guidelines</td>
      <td>3</td>
      <td>2274.33</td>
      <td>1019.08</td>
      <td>33.69</td>
    </tr>
    <tr>
      <td>User Consent Policy</td>
      <td>4</td>
      <td>330</td>
      <td>0</td>
      <td>33.36</td>
    </tr>
    <tr>
      <td>Software License Agreement</td>
      <td>1</td>
      <td>5756</td>
      <td>-</td>
      <td>31.57</td>
    </tr>
    <tr>
      <td>Human Rights Policy</td>
      <td>1</td>
      <td>1495</td>
      <td>-</td>
      <td>30.91</td>
    </tr>
    <tr>
      <td>Data Processor Agreement</td>
      <td>3</td>
      <td>5548.66</td>
      <td>3592.85</td>
      <td>30.31</td>
    </tr>
    <tr>
      <td>Restricted Use Policy</td>
      <td>1</td>
      <td>996</td>
      <td>-</td>
      <td>25.98</td>
    </tr>
    <tr>
      <td>Data Controller Agreement</td>
      <td>4</td>
      <td>3380.75</td>
      <td>491.50</td>
      <td>25.85</td>
    </tr>
    <tr>
      <td>Acceptable Use Policy</td>
      <td>3</td>
      <td>1571.66</td>
      <td>717</td>
      <td>-3.05</td>
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
<td>100.00–90</td>
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