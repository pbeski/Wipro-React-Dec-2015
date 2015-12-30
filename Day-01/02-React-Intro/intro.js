var App = React.createClass({
    btnClick : function(){
        var me = this;
//        setTimeout(function() {
            var value = parseInt(this.refs.txtStart.value,10);
            this.setState({start : value});
//        }, 1000);
    },
    getInitialState : function(){
        console.log("getInitialState");
        return {start : 0};
    },
    render : function(){
        console.log("rendering App");
        console.log(this.state);
        return (
            <div>
                <h1>React App Demo</h1>
                <label>Start :</label>
                <input type="text" ref="txtStart"/>
                <input type="button" onClick={this.btnClick} value="Set Start Value"/>
                <Spinner start={this.state.start}></Spinner>
            </div>
        )
    }
});

var Spinner = React.createClass({
    getInitialState : function(){
        console.log("props -> ", this.props);
        var start = this.props.start || 0;
        return {count : start};
    },
    componentWillReceiveProps: function(newProps) {
        console.log('new props');
        if (newProps.start != this.state.count) {
            this.setState({count:newProps.start });
        }

    },
    increment : function(){
        this.setState({count : ++this.state.count});
    },
    decrement : function(){
        this.setState({count : --this.state.count});
    },
    render : function(){
        console.log(this.props.start);
        console.log("rendering Spinner");
        return (
            <div>
                <h3>Spinner</h3>
                <input type="button" value="Up" onClick={this.increment}/>
                <input type="button" value="Down" onClick={this.decrement}/>
                <div>Start: {this.props.start}</div>
                <div>Count: {this.state.count}</div>
            </div>
        )
    }
});


ReactDOM.render(<App> </App>, document.getElementById("content"));
