# Customer Segmentation 
<p>Customer segmentation according to the revenue|spend they made within the network</p>
<i>We have two different segmentation prespectives (Behavioral and Marketing)</i>

#### Marketing segmentation
<p>Is the practice of dividing your target market into approachable groups</p>

#### Behavioral segmentation
<p>refers to a process in marketing which divides customers into segments depending on their behavior patterns when interacting with a particular business or website.</p>

### Installation

```bash 
npm i customer-segmentation --save
```

### Example || Usage

```javascript
const { customerSegment } = require("customer-segmentation");
const behavior = customerSegment({ name: "John Doe", revenue: 2500, age: 30 });
```
The `customerSegment` function take `5` argumens that are `name`, `revenue`, `city`, `networkOperator`, and `age`.
######
Object that will be returned :
```javascript
Customer {
  name: 'John Doe',
  revenue: 834,
  city: undefined,
  networkOperator: undefined,
  age: 30,
  behaviorSegmentation: 'H',
  marketSegmentation: 'MASS MARKET'
}
```

#### Fields description 
##### behaviorSegmentation [customer behavior]
###### ZERO RATED - Customer that isnt generate any revenue
###### UL - Ultra Low Customer
###### ML - Medium Low Customer
###### H - High Value Customer
###### H - Ultra High Customer


##### marketSegmentation [market behavior]
###### YOUTH - Youth customer | People with max 25 years-old
###### MASS MARKET - Undifferentiated market of consumers
###### HIGH - High Value Customer

##### networkOperator
###### Communication signal providers

## License

MIT © [Euclidio Venancio](https://linkedin.com/in/euclidio-venancio)
