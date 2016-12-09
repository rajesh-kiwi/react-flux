var React = require("react");

var Main = React.createClass({
    componentDidMount: function() {
        
    },
	render: function() {
		var that = this;
		var childrenWithProps = React.Children.map(this.props.children, function(child) {
		    return React.cloneElement(child);
        });
       
		return (
			<div>
				{childrenWithProps}
			</div>

   		);
	},
});

module.exports.Main = Main;