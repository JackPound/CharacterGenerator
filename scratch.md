	{% for ability in abilities %}
			<input type="submit" value="-" name="{{ability}}_subtract">
			<p style="display:inline;">{{ability}}: {{ability_score}}</p>
			<input type="hidden" value={{ability_score}} name="currentvalue">
			<input type="submit" value="+" name="{{ability}}_add">
			<hr />
			{% endfor %}