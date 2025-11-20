import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client/react"

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  jsonb: { input: any; output: any }
  numeric: { input: any; output: any }
  timestamp: { input: any; output: any }
  timestamptz: { input: any; output: any }
  uuid: { input: any; output: any }
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>
  _gt?: InputMaybe<Scalars["Int"]["input"]>
  _gte?: InputMaybe<Scalars["Int"]["input"]>
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>
  _lt?: InputMaybe<Scalars["Int"]["input"]>
  _lte?: InputMaybe<Scalars["Int"]["input"]>
  _neq?: InputMaybe<Scalars["Int"]["input"]>
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>
}

export type LoginResponse = {
  __typename?: "LoginResponse"
  role?: Maybe<Scalars["String"]["output"]>
  token?: Maybe<Scalars["String"]["output"]>
  user_id?: Maybe<Scalars["uuid"]["output"]>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Array_Comparison_Exp = {
  /** is the array contained in the given array value */
  _contained_in?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** does the array contain the given value */
  _contains?: InputMaybe<Array<Scalars["String"]["input"]>>
  _eq?: InputMaybe<Array<Scalars["String"]["input"]>>
  _gt?: InputMaybe<Array<Scalars["String"]["input"]>>
  _gte?: InputMaybe<Array<Scalars["String"]["input"]>>
  _in?: InputMaybe<Array<Array<Scalars["String"]["input"]>>>
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>
  _lt?: InputMaybe<Array<Scalars["String"]["input"]>>
  _lte?: InputMaybe<Array<Scalars["String"]["input"]>>
  _neq?: InputMaybe<Array<Scalars["String"]["input"]>>
  _nin?: InputMaybe<Array<Array<Scalars["String"]["input"]>>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>
  _gt?: InputMaybe<Scalars["String"]["input"]>
  _gte?: InputMaybe<Scalars["String"]["input"]>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>
  _lt?: InputMaybe<Scalars["String"]["input"]>
  _lte?: InputMaybe<Scalars["String"]["input"]>
  _neq?: InputMaybe<Scalars["String"]["input"]>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>
}

/** columns and relationships of "cart" */
export type Cart = {
  __typename?: "cart"
  added_at?: Maybe<Scalars["timestamptz"]["output"]>
  id: Scalars["uuid"]["output"]
  /** An object relationship */
  menu_item: Menu_Items
  menu_item_id: Scalars["uuid"]["output"]
  price_at_purchase: Scalars["numeric"]["output"]
  quantity: Scalars["Int"]["output"]
  /** An object relationship */
  special_offer?: Maybe<Special_Offers>
  special_offer_id?: Maybe<Scalars["uuid"]["output"]>
  /** An object relationship */
  user: Users
  user_id: Scalars["uuid"]["output"]
}

/** aggregated selection of "cart" */
export type Cart_Aggregate = {
  __typename?: "cart_aggregate"
  aggregate?: Maybe<Cart_Aggregate_Fields>
  nodes: Array<Cart>
}

/** aggregate fields of "cart" */
export type Cart_Aggregate_Fields = {
  __typename?: "cart_aggregate_fields"
  avg?: Maybe<Cart_Avg_Fields>
  count: Scalars["Int"]["output"]
  max?: Maybe<Cart_Max_Fields>
  min?: Maybe<Cart_Min_Fields>
  stddev?: Maybe<Cart_Stddev_Fields>
  stddev_pop?: Maybe<Cart_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Cart_Stddev_Samp_Fields>
  sum?: Maybe<Cart_Sum_Fields>
  var_pop?: Maybe<Cart_Var_Pop_Fields>
  var_samp?: Maybe<Cart_Var_Samp_Fields>
  variance?: Maybe<Cart_Variance_Fields>
}

/** aggregate fields of "cart" */
export type Cart_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cart_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** aggregate avg on columns */
export type Cart_Avg_Fields = {
  __typename?: "cart_avg_fields"
  price_at_purchase?: Maybe<Scalars["Float"]["output"]>
  quantity?: Maybe<Scalars["Float"]["output"]>
}

/** Boolean expression to filter rows from the table "cart". All fields are combined with a logical 'AND'. */
export type Cart_Bool_Exp = {
  _and?: InputMaybe<Array<Cart_Bool_Exp>>
  _not?: InputMaybe<Cart_Bool_Exp>
  _or?: InputMaybe<Array<Cart_Bool_Exp>>
  added_at?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  menu_item?: InputMaybe<Menu_Items_Bool_Exp>
  menu_item_id?: InputMaybe<Uuid_Comparison_Exp>
  price_at_purchase?: InputMaybe<Numeric_Comparison_Exp>
  quantity?: InputMaybe<Int_Comparison_Exp>
  special_offer?: InputMaybe<Special_Offers_Bool_Exp>
  special_offer_id?: InputMaybe<Uuid_Comparison_Exp>
  user?: InputMaybe<Users_Bool_Exp>
  user_id?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "cart" */
export enum Cart_Constraint {
  /** unique or primary key constraint on columns "id" */
  CartPkey = "cart_pkey",
  /** unique or primary key constraint on columns "user_id", "menu_item_id" */
  CartUserIdMenuItemIdKey = "cart_user_id_menu_item_id_key",
}

/** input type for incrementing numeric columns in table "cart" */
export type Cart_Inc_Input = {
  price_at_purchase?: InputMaybe<Scalars["numeric"]["input"]>
  quantity?: InputMaybe<Scalars["Int"]["input"]>
}

/** input type for inserting data into table "cart" */
export type Cart_Insert_Input = {
  added_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  menu_item?: InputMaybe<Menu_Items_Obj_Rel_Insert_Input>
  menu_item_id?: InputMaybe<Scalars["uuid"]["input"]>
  price_at_purchase?: InputMaybe<Scalars["numeric"]["input"]>
  quantity?: InputMaybe<Scalars["Int"]["input"]>
  special_offer?: InputMaybe<Special_Offers_Obj_Rel_Insert_Input>
  special_offer_id?: InputMaybe<Scalars["uuid"]["input"]>
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>
  user_id?: InputMaybe<Scalars["uuid"]["input"]>
}

/** aggregate max on columns */
export type Cart_Max_Fields = {
  __typename?: "cart_max_fields"
  added_at?: Maybe<Scalars["timestamptz"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  menu_item_id?: Maybe<Scalars["uuid"]["output"]>
  price_at_purchase?: Maybe<Scalars["numeric"]["output"]>
  quantity?: Maybe<Scalars["Int"]["output"]>
  special_offer_id?: Maybe<Scalars["uuid"]["output"]>
  user_id?: Maybe<Scalars["uuid"]["output"]>
}

/** aggregate min on columns */
export type Cart_Min_Fields = {
  __typename?: "cart_min_fields"
  added_at?: Maybe<Scalars["timestamptz"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  menu_item_id?: Maybe<Scalars["uuid"]["output"]>
  price_at_purchase?: Maybe<Scalars["numeric"]["output"]>
  quantity?: Maybe<Scalars["Int"]["output"]>
  special_offer_id?: Maybe<Scalars["uuid"]["output"]>
  user_id?: Maybe<Scalars["uuid"]["output"]>
}

/** response of any mutation on the table "cart" */
export type Cart_Mutation_Response = {
  __typename?: "cart_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Cart>
}

/** on_conflict condition type for table "cart" */
export type Cart_On_Conflict = {
  constraint: Cart_Constraint
  update_columns?: Array<Cart_Update_Column>
  where?: InputMaybe<Cart_Bool_Exp>
}

/** Ordering options when selecting data from "cart". */
export type Cart_Order_By = {
  added_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  menu_item?: InputMaybe<Menu_Items_Order_By>
  menu_item_id?: InputMaybe<Order_By>
  price_at_purchase?: InputMaybe<Order_By>
  quantity?: InputMaybe<Order_By>
  special_offer?: InputMaybe<Special_Offers_Order_By>
  special_offer_id?: InputMaybe<Order_By>
  user?: InputMaybe<Users_Order_By>
  user_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: cart */
export type Cart_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "cart" */
export enum Cart_Select_Column {
  /** column name */
  AddedAt = "added_at",
  /** column name */
  Id = "id",
  /** column name */
  MenuItemId = "menu_item_id",
  /** column name */
  PriceAtPurchase = "price_at_purchase",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SpecialOfferId = "special_offer_id",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "cart" */
export type Cart_Set_Input = {
  added_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  menu_item_id?: InputMaybe<Scalars["uuid"]["input"]>
  price_at_purchase?: InputMaybe<Scalars["numeric"]["input"]>
  quantity?: InputMaybe<Scalars["Int"]["input"]>
  special_offer_id?: InputMaybe<Scalars["uuid"]["input"]>
  user_id?: InputMaybe<Scalars["uuid"]["input"]>
}

/** aggregate stddev on columns */
export type Cart_Stddev_Fields = {
  __typename?: "cart_stddev_fields"
  price_at_purchase?: Maybe<Scalars["Float"]["output"]>
  quantity?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_pop on columns */
export type Cart_Stddev_Pop_Fields = {
  __typename?: "cart_stddev_pop_fields"
  price_at_purchase?: Maybe<Scalars["Float"]["output"]>
  quantity?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_samp on columns */
export type Cart_Stddev_Samp_Fields = {
  __typename?: "cart_stddev_samp_fields"
  price_at_purchase?: Maybe<Scalars["Float"]["output"]>
  quantity?: Maybe<Scalars["Float"]["output"]>
}

/** Streaming cursor of the table "cart" */
export type Cart_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cart_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Cart_Stream_Cursor_Value_Input = {
  added_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  menu_item_id?: InputMaybe<Scalars["uuid"]["input"]>
  price_at_purchase?: InputMaybe<Scalars["numeric"]["input"]>
  quantity?: InputMaybe<Scalars["Int"]["input"]>
  special_offer_id?: InputMaybe<Scalars["uuid"]["input"]>
  user_id?: InputMaybe<Scalars["uuid"]["input"]>
}

/** aggregate sum on columns */
export type Cart_Sum_Fields = {
  __typename?: "cart_sum_fields"
  price_at_purchase?: Maybe<Scalars["numeric"]["output"]>
  quantity?: Maybe<Scalars["Int"]["output"]>
}

/** update columns of table "cart" */
export enum Cart_Update_Column {
  /** column name */
  AddedAt = "added_at",
  /** column name */
  Id = "id",
  /** column name */
  MenuItemId = "menu_item_id",
  /** column name */
  PriceAtPurchase = "price_at_purchase",
  /** column name */
  Quantity = "quantity",
  /** column name */
  SpecialOfferId = "special_offer_id",
  /** column name */
  UserId = "user_id",
}

export type Cart_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cart_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cart_Set_Input>
  /** filter the rows which have to be updated */
  where: Cart_Bool_Exp
}

/** aggregate var_pop on columns */
export type Cart_Var_Pop_Fields = {
  __typename?: "cart_var_pop_fields"
  price_at_purchase?: Maybe<Scalars["Float"]["output"]>
  quantity?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate var_samp on columns */
export type Cart_Var_Samp_Fields = {
  __typename?: "cart_var_samp_fields"
  price_at_purchase?: Maybe<Scalars["Float"]["output"]>
  quantity?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate variance on columns */
export type Cart_Variance_Fields = {
  __typename?: "cart_variance_fields"
  price_at_purchase?: Maybe<Scalars["Float"]["output"]>
  quantity?: Maybe<Scalars["Float"]["output"]>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "deliveries" */
export type Deliveries = {
  __typename?: "deliveries"
  delivered_time?: Maybe<Scalars["timestamptz"]["output"]>
  estimated_delivery_time: Scalars["timestamptz"]["output"]
  id: Scalars["uuid"]["output"]
  order_id: Scalars["uuid"]["output"]
  pickup_time?: Maybe<Scalars["timestamptz"]["output"]>
  rider_id: Scalars["uuid"]["output"]
  status: Scalars["String"]["output"]
}

/** aggregated selection of "deliveries" */
export type Deliveries_Aggregate = {
  __typename?: "deliveries_aggregate"
  aggregate?: Maybe<Deliveries_Aggregate_Fields>
  nodes: Array<Deliveries>
}

/** aggregate fields of "deliveries" */
export type Deliveries_Aggregate_Fields = {
  __typename?: "deliveries_aggregate_fields"
  count: Scalars["Int"]["output"]
  max?: Maybe<Deliveries_Max_Fields>
  min?: Maybe<Deliveries_Min_Fields>
}

/** aggregate fields of "deliveries" */
export type Deliveries_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deliveries_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** Boolean expression to filter rows from the table "deliveries". All fields are combined with a logical 'AND'. */
export type Deliveries_Bool_Exp = {
  _and?: InputMaybe<Array<Deliveries_Bool_Exp>>
  _not?: InputMaybe<Deliveries_Bool_Exp>
  _or?: InputMaybe<Array<Deliveries_Bool_Exp>>
  delivered_time?: InputMaybe<Timestamptz_Comparison_Exp>
  estimated_delivery_time?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  order_id?: InputMaybe<Uuid_Comparison_Exp>
  pickup_time?: InputMaybe<Timestamptz_Comparison_Exp>
  rider_id?: InputMaybe<Uuid_Comparison_Exp>
  status?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "deliveries" */
export enum Deliveries_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeliveriesPkey = "deliveries_pkey",
}

/** input type for inserting data into table "deliveries" */
export type Deliveries_Insert_Input = {
  delivered_time?: InputMaybe<Scalars["timestamptz"]["input"]>
  estimated_delivery_time?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  pickup_time?: InputMaybe<Scalars["timestamptz"]["input"]>
  rider_id?: InputMaybe<Scalars["uuid"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
}

/** aggregate max on columns */
export type Deliveries_Max_Fields = {
  __typename?: "deliveries_max_fields"
  delivered_time?: Maybe<Scalars["timestamptz"]["output"]>
  estimated_delivery_time?: Maybe<Scalars["timestamptz"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  pickup_time?: Maybe<Scalars["timestamptz"]["output"]>
  rider_id?: Maybe<Scalars["uuid"]["output"]>
  status?: Maybe<Scalars["String"]["output"]>
}

/** aggregate min on columns */
export type Deliveries_Min_Fields = {
  __typename?: "deliveries_min_fields"
  delivered_time?: Maybe<Scalars["timestamptz"]["output"]>
  estimated_delivery_time?: Maybe<Scalars["timestamptz"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  pickup_time?: Maybe<Scalars["timestamptz"]["output"]>
  rider_id?: Maybe<Scalars["uuid"]["output"]>
  status?: Maybe<Scalars["String"]["output"]>
}

/** response of any mutation on the table "deliveries" */
export type Deliveries_Mutation_Response = {
  __typename?: "deliveries_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Deliveries>
}

/** on_conflict condition type for table "deliveries" */
export type Deliveries_On_Conflict = {
  constraint: Deliveries_Constraint
  update_columns?: Array<Deliveries_Update_Column>
  where?: InputMaybe<Deliveries_Bool_Exp>
}

/** Ordering options when selecting data from "deliveries". */
export type Deliveries_Order_By = {
  delivered_time?: InputMaybe<Order_By>
  estimated_delivery_time?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  pickup_time?: InputMaybe<Order_By>
  rider_id?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** primary key columns input for table: deliveries */
export type Deliveries_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "deliveries" */
export enum Deliveries_Select_Column {
  /** column name */
  DeliveredTime = "delivered_time",
  /** column name */
  EstimatedDeliveryTime = "estimated_delivery_time",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  PickupTime = "pickup_time",
  /** column name */
  RiderId = "rider_id",
  /** column name */
  Status = "status",
}

/** input type for updating data in table "deliveries" */
export type Deliveries_Set_Input = {
  delivered_time?: InputMaybe<Scalars["timestamptz"]["input"]>
  estimated_delivery_time?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  pickup_time?: InputMaybe<Scalars["timestamptz"]["input"]>
  rider_id?: InputMaybe<Scalars["uuid"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
}

/** Streaming cursor of the table "deliveries" */
export type Deliveries_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Deliveries_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Deliveries_Stream_Cursor_Value_Input = {
  delivered_time?: InputMaybe<Scalars["timestamptz"]["input"]>
  estimated_delivery_time?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  pickup_time?: InputMaybe<Scalars["timestamptz"]["input"]>
  rider_id?: InputMaybe<Scalars["uuid"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
}

/** update columns of table "deliveries" */
export enum Deliveries_Update_Column {
  /** column name */
  DeliveredTime = "delivered_time",
  /** column name */
  EstimatedDeliveryTime = "estimated_delivery_time",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  PickupTime = "pickup_time",
  /** column name */
  RiderId = "rider_id",
  /** column name */
  Status = "status",
}

export type Deliveries_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Deliveries_Set_Input>
  /** filter the rows which have to be updated */
  where: Deliveries_Bool_Exp
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]["input"]>
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]["input"]>
  _eq?: InputMaybe<Scalars["jsonb"]["input"]>
  _gt?: InputMaybe<Scalars["jsonb"]["input"]>
  _gte?: InputMaybe<Scalars["jsonb"]["input"]>
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]["input"]>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]["input"]>>
  _in?: InputMaybe<Array<Scalars["jsonb"]["input"]>>
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>
  _lt?: InputMaybe<Scalars["jsonb"]["input"]>
  _lte?: InputMaybe<Scalars["jsonb"]["input"]>
  _neq?: InputMaybe<Scalars["jsonb"]["input"]>
  _nin?: InputMaybe<Array<Scalars["jsonb"]["input"]>>
}

/** columns and relationships of "kitchen_orders" */
export type Kitchen_Orders = {
  __typename?: "kitchen_orders"
  chef_id: Scalars["uuid"]["output"]
  completed_at?: Maybe<Scalars["timestamptz"]["output"]>
  id: Scalars["uuid"]["output"]
  order_id: Scalars["uuid"]["output"]
  started_at?: Maybe<Scalars["timestamptz"]["output"]>
  status: Scalars["String"]["output"]
}

/** aggregated selection of "kitchen_orders" */
export type Kitchen_Orders_Aggregate = {
  __typename?: "kitchen_orders_aggregate"
  aggregate?: Maybe<Kitchen_Orders_Aggregate_Fields>
  nodes: Array<Kitchen_Orders>
}

/** aggregate fields of "kitchen_orders" */
export type Kitchen_Orders_Aggregate_Fields = {
  __typename?: "kitchen_orders_aggregate_fields"
  count: Scalars["Int"]["output"]
  max?: Maybe<Kitchen_Orders_Max_Fields>
  min?: Maybe<Kitchen_Orders_Min_Fields>
}

/** aggregate fields of "kitchen_orders" */
export type Kitchen_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kitchen_Orders_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** Boolean expression to filter rows from the table "kitchen_orders". All fields are combined with a logical 'AND'. */
export type Kitchen_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Kitchen_Orders_Bool_Exp>>
  _not?: InputMaybe<Kitchen_Orders_Bool_Exp>
  _or?: InputMaybe<Array<Kitchen_Orders_Bool_Exp>>
  chef_id?: InputMaybe<Uuid_Comparison_Exp>
  completed_at?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  order_id?: InputMaybe<Uuid_Comparison_Exp>
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>
  status?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "kitchen_orders" */
export enum Kitchen_Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  KitchenOrdersPkey = "kitchen_orders_pkey",
}

/** input type for inserting data into table "kitchen_orders" */
export type Kitchen_Orders_Insert_Input = {
  chef_id?: InputMaybe<Scalars["uuid"]["input"]>
  completed_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  started_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
}

/** aggregate max on columns */
export type Kitchen_Orders_Max_Fields = {
  __typename?: "kitchen_orders_max_fields"
  chef_id?: Maybe<Scalars["uuid"]["output"]>
  completed_at?: Maybe<Scalars["timestamptz"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  started_at?: Maybe<Scalars["timestamptz"]["output"]>
  status?: Maybe<Scalars["String"]["output"]>
}

/** aggregate min on columns */
export type Kitchen_Orders_Min_Fields = {
  __typename?: "kitchen_orders_min_fields"
  chef_id?: Maybe<Scalars["uuid"]["output"]>
  completed_at?: Maybe<Scalars["timestamptz"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  started_at?: Maybe<Scalars["timestamptz"]["output"]>
  status?: Maybe<Scalars["String"]["output"]>
}

/** response of any mutation on the table "kitchen_orders" */
export type Kitchen_Orders_Mutation_Response = {
  __typename?: "kitchen_orders_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Kitchen_Orders>
}

/** on_conflict condition type for table "kitchen_orders" */
export type Kitchen_Orders_On_Conflict = {
  constraint: Kitchen_Orders_Constraint
  update_columns?: Array<Kitchen_Orders_Update_Column>
  where?: InputMaybe<Kitchen_Orders_Bool_Exp>
}

/** Ordering options when selecting data from "kitchen_orders". */
export type Kitchen_Orders_Order_By = {
  chef_id?: InputMaybe<Order_By>
  completed_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  started_at?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
}

/** primary key columns input for table: kitchen_orders */
export type Kitchen_Orders_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "kitchen_orders" */
export enum Kitchen_Orders_Select_Column {
  /** column name */
  ChefId = "chef_id",
  /** column name */
  CompletedAt = "completed_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  StartedAt = "started_at",
  /** column name */
  Status = "status",
}

/** input type for updating data in table "kitchen_orders" */
export type Kitchen_Orders_Set_Input = {
  chef_id?: InputMaybe<Scalars["uuid"]["input"]>
  completed_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  started_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
}

/** Streaming cursor of the table "kitchen_orders" */
export type Kitchen_Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Kitchen_Orders_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Kitchen_Orders_Stream_Cursor_Value_Input = {
  chef_id?: InputMaybe<Scalars["uuid"]["input"]>
  completed_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  started_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
}

/** update columns of table "kitchen_orders" */
export enum Kitchen_Orders_Update_Column {
  /** column name */
  ChefId = "chef_id",
  /** column name */
  CompletedAt = "completed_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  StartedAt = "started_at",
  /** column name */
  Status = "status",
}

export type Kitchen_Orders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Kitchen_Orders_Set_Input>
  /** filter the rows which have to be updated */
  where: Kitchen_Orders_Bool_Exp
}

/** columns and relationships of "menu_categories" */
export type Menu_Categories = {
  __typename?: "menu_categories"
  created_at: Scalars["timestamptz"]["output"]
  description: Scalars["String"]["output"]
  id: Scalars["uuid"]["output"]
  image_url: Scalars["String"]["output"]
  name: Scalars["String"]["output"]
}

/** aggregated selection of "menu_categories" */
export type Menu_Categories_Aggregate = {
  __typename?: "menu_categories_aggregate"
  aggregate?: Maybe<Menu_Categories_Aggregate_Fields>
  nodes: Array<Menu_Categories>
}

/** aggregate fields of "menu_categories" */
export type Menu_Categories_Aggregate_Fields = {
  __typename?: "menu_categories_aggregate_fields"
  count: Scalars["Int"]["output"]
  max?: Maybe<Menu_Categories_Max_Fields>
  min?: Maybe<Menu_Categories_Min_Fields>
}

/** aggregate fields of "menu_categories" */
export type Menu_Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Menu_Categories_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** Boolean expression to filter rows from the table "menu_categories". All fields are combined with a logical 'AND'. */
export type Menu_Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Menu_Categories_Bool_Exp>>
  _not?: InputMaybe<Menu_Categories_Bool_Exp>
  _or?: InputMaybe<Array<Menu_Categories_Bool_Exp>>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  image_url?: InputMaybe<String_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "menu_categories" */
export enum Menu_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  MenuCategoriesPkey = "menu_categories_pkey",
}

/** input type for inserting data into table "menu_categories" */
export type Menu_Categories_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  image_url?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
}

/** aggregate max on columns */
export type Menu_Categories_Max_Fields = {
  __typename?: "menu_categories_max_fields"
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  image_url?: Maybe<Scalars["String"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
}

/** aggregate min on columns */
export type Menu_Categories_Min_Fields = {
  __typename?: "menu_categories_min_fields"
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  image_url?: Maybe<Scalars["String"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
}

/** response of any mutation on the table "menu_categories" */
export type Menu_Categories_Mutation_Response = {
  __typename?: "menu_categories_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Menu_Categories>
}

/** on_conflict condition type for table "menu_categories" */
export type Menu_Categories_On_Conflict = {
  constraint: Menu_Categories_Constraint
  update_columns?: Array<Menu_Categories_Update_Column>
  where?: InputMaybe<Menu_Categories_Bool_Exp>
}

/** Ordering options when selecting data from "menu_categories". */
export type Menu_Categories_Order_By = {
  created_at?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  image_url?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
}

/** primary key columns input for table: menu_categories */
export type Menu_Categories_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "menu_categories" */
export enum Menu_Categories_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  ImageUrl = "image_url",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "menu_categories" */
export type Menu_Categories_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  image_url?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
}

/** Streaming cursor of the table "menu_categories" */
export type Menu_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Menu_Categories_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Menu_Categories_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  image_url?: InputMaybe<Scalars["String"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
}

/** update columns of table "menu_categories" */
export enum Menu_Categories_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  ImageUrl = "image_url",
  /** column name */
  Name = "name",
}

export type Menu_Categories_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Menu_Categories_Set_Input>
  /** filter the rows which have to be updated */
  where: Menu_Categories_Bool_Exp
}

/** columns and relationships of "menu_items" */
export type Menu_Items = {
  __typename?: "menu_items"
  allergens: Scalars["jsonb"]["output"]
  calories?: Maybe<Scalars["numeric"]["output"]>
  category_id: Scalars["uuid"]["output"]
  created_at: Scalars["timestamptz"]["output"]
  description: Scalars["String"]["output"]
  id: Scalars["uuid"]["output"]
  image_url: Scalars["String"]["output"]
  ingredients: Scalars["String"]["output"]
  is_available: Scalars["Boolean"]["output"]
  name: Scalars["String"]["output"]
  price: Scalars["numeric"]["output"]
  updated_at: Scalars["timestamptz"]["output"]
}

/** columns and relationships of "menu_items" */
export type Menu_ItemsAllergensArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>
}

/** aggregated selection of "menu_items" */
export type Menu_Items_Aggregate = {
  __typename?: "menu_items_aggregate"
  aggregate?: Maybe<Menu_Items_Aggregate_Fields>
  nodes: Array<Menu_Items>
}

/** aggregate fields of "menu_items" */
export type Menu_Items_Aggregate_Fields = {
  __typename?: "menu_items_aggregate_fields"
  avg?: Maybe<Menu_Items_Avg_Fields>
  count: Scalars["Int"]["output"]
  max?: Maybe<Menu_Items_Max_Fields>
  min?: Maybe<Menu_Items_Min_Fields>
  stddev?: Maybe<Menu_Items_Stddev_Fields>
  stddev_pop?: Maybe<Menu_Items_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Menu_Items_Stddev_Samp_Fields>
  sum?: Maybe<Menu_Items_Sum_Fields>
  var_pop?: Maybe<Menu_Items_Var_Pop_Fields>
  var_samp?: Maybe<Menu_Items_Var_Samp_Fields>
  variance?: Maybe<Menu_Items_Variance_Fields>
}

/** aggregate fields of "menu_items" */
export type Menu_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Menu_Items_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Menu_Items_Append_Input = {
  allergens?: InputMaybe<Scalars["jsonb"]["input"]>
}

/** aggregate avg on columns */
export type Menu_Items_Avg_Fields = {
  __typename?: "menu_items_avg_fields"
  calories?: Maybe<Scalars["Float"]["output"]>
  price?: Maybe<Scalars["Float"]["output"]>
}

/** Boolean expression to filter rows from the table "menu_items". All fields are combined with a logical 'AND'. */
export type Menu_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Menu_Items_Bool_Exp>>
  _not?: InputMaybe<Menu_Items_Bool_Exp>
  _or?: InputMaybe<Array<Menu_Items_Bool_Exp>>
  allergens?: InputMaybe<Jsonb_Comparison_Exp>
  calories?: InputMaybe<Numeric_Comparison_Exp>
  category_id?: InputMaybe<Uuid_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  image_url?: InputMaybe<String_Comparison_Exp>
  ingredients?: InputMaybe<String_Comparison_Exp>
  is_available?: InputMaybe<Boolean_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  price?: InputMaybe<Numeric_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "menu_items" */
export enum Menu_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  MenuItemsPkey = "menu_items_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Menu_Items_Delete_At_Path_Input = {
  allergens?: InputMaybe<Array<Scalars["String"]["input"]>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Menu_Items_Delete_Elem_Input = {
  allergens?: InputMaybe<Scalars["Int"]["input"]>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Menu_Items_Delete_Key_Input = {
  allergens?: InputMaybe<Scalars["String"]["input"]>
}

/** input type for incrementing numeric columns in table "menu_items" */
export type Menu_Items_Inc_Input = {
  calories?: InputMaybe<Scalars["numeric"]["input"]>
  price?: InputMaybe<Scalars["numeric"]["input"]>
}

/** input type for inserting data into table "menu_items" */
export type Menu_Items_Insert_Input = {
  allergens?: InputMaybe<Scalars["jsonb"]["input"]>
  calories?: InputMaybe<Scalars["numeric"]["input"]>
  category_id?: InputMaybe<Scalars["uuid"]["input"]>
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  image_url?: InputMaybe<Scalars["String"]["input"]>
  ingredients?: InputMaybe<Scalars["String"]["input"]>
  is_available?: InputMaybe<Scalars["Boolean"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  price?: InputMaybe<Scalars["numeric"]["input"]>
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>
}

/** aggregate max on columns */
export type Menu_Items_Max_Fields = {
  __typename?: "menu_items_max_fields"
  calories?: Maybe<Scalars["numeric"]["output"]>
  category_id?: Maybe<Scalars["uuid"]["output"]>
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  image_url?: Maybe<Scalars["String"]["output"]>
  ingredients?: Maybe<Scalars["String"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  price?: Maybe<Scalars["numeric"]["output"]>
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>
}

/** aggregate min on columns */
export type Menu_Items_Min_Fields = {
  __typename?: "menu_items_min_fields"
  calories?: Maybe<Scalars["numeric"]["output"]>
  category_id?: Maybe<Scalars["uuid"]["output"]>
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  image_url?: Maybe<Scalars["String"]["output"]>
  ingredients?: Maybe<Scalars["String"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  price?: Maybe<Scalars["numeric"]["output"]>
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>
}

/** response of any mutation on the table "menu_items" */
export type Menu_Items_Mutation_Response = {
  __typename?: "menu_items_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Menu_Items>
}

/** input type for inserting object relation for remote table "menu_items" */
export type Menu_Items_Obj_Rel_Insert_Input = {
  data: Menu_Items_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Menu_Items_On_Conflict>
}

/** on_conflict condition type for table "menu_items" */
export type Menu_Items_On_Conflict = {
  constraint: Menu_Items_Constraint
  update_columns?: Array<Menu_Items_Update_Column>
  where?: InputMaybe<Menu_Items_Bool_Exp>
}

/** Ordering options when selecting data from "menu_items". */
export type Menu_Items_Order_By = {
  allergens?: InputMaybe<Order_By>
  calories?: InputMaybe<Order_By>
  category_id?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  image_url?: InputMaybe<Order_By>
  ingredients?: InputMaybe<Order_By>
  is_available?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  price?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
}

/** primary key columns input for table: menu_items */
export type Menu_Items_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Menu_Items_Prepend_Input = {
  allergens?: InputMaybe<Scalars["jsonb"]["input"]>
}

/** select columns of table "menu_items" */
export enum Menu_Items_Select_Column {
  /** column name */
  Allergens = "allergens",
  /** column name */
  Calories = "calories",
  /** column name */
  CategoryId = "category_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  ImageUrl = "image_url",
  /** column name */
  Ingredients = "ingredients",
  /** column name */
  IsAvailable = "is_available",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "menu_items" */
export type Menu_Items_Set_Input = {
  allergens?: InputMaybe<Scalars["jsonb"]["input"]>
  calories?: InputMaybe<Scalars["numeric"]["input"]>
  category_id?: InputMaybe<Scalars["uuid"]["input"]>
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  image_url?: InputMaybe<Scalars["String"]["input"]>
  ingredients?: InputMaybe<Scalars["String"]["input"]>
  is_available?: InputMaybe<Scalars["Boolean"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  price?: InputMaybe<Scalars["numeric"]["input"]>
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>
}

/** aggregate stddev on columns */
export type Menu_Items_Stddev_Fields = {
  __typename?: "menu_items_stddev_fields"
  calories?: Maybe<Scalars["Float"]["output"]>
  price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_pop on columns */
export type Menu_Items_Stddev_Pop_Fields = {
  __typename?: "menu_items_stddev_pop_fields"
  calories?: Maybe<Scalars["Float"]["output"]>
  price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_samp on columns */
export type Menu_Items_Stddev_Samp_Fields = {
  __typename?: "menu_items_stddev_samp_fields"
  calories?: Maybe<Scalars["Float"]["output"]>
  price?: Maybe<Scalars["Float"]["output"]>
}

/** Streaming cursor of the table "menu_items" */
export type Menu_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Menu_Items_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Menu_Items_Stream_Cursor_Value_Input = {
  allergens?: InputMaybe<Scalars["jsonb"]["input"]>
  calories?: InputMaybe<Scalars["numeric"]["input"]>
  category_id?: InputMaybe<Scalars["uuid"]["input"]>
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  image_url?: InputMaybe<Scalars["String"]["input"]>
  ingredients?: InputMaybe<Scalars["String"]["input"]>
  is_available?: InputMaybe<Scalars["Boolean"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  price?: InputMaybe<Scalars["numeric"]["input"]>
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>
}

/** aggregate sum on columns */
export type Menu_Items_Sum_Fields = {
  __typename?: "menu_items_sum_fields"
  calories?: Maybe<Scalars["numeric"]["output"]>
  price?: Maybe<Scalars["numeric"]["output"]>
}

/** update columns of table "menu_items" */
export enum Menu_Items_Update_Column {
  /** column name */
  Allergens = "allergens",
  /** column name */
  Calories = "calories",
  /** column name */
  CategoryId = "category_id",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  ImageUrl = "image_url",
  /** column name */
  Ingredients = "ingredients",
  /** column name */
  IsAvailable = "is_available",
  /** column name */
  Name = "name",
  /** column name */
  Price = "price",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Menu_Items_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Menu_Items_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Menu_Items_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Menu_Items_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Menu_Items_Delete_Key_Input>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Menu_Items_Inc_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Menu_Items_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Menu_Items_Set_Input>
  /** filter the rows which have to be updated */
  where: Menu_Items_Bool_Exp
}

/** aggregate var_pop on columns */
export type Menu_Items_Var_Pop_Fields = {
  __typename?: "menu_items_var_pop_fields"
  calories?: Maybe<Scalars["Float"]["output"]>
  price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate var_samp on columns */
export type Menu_Items_Var_Samp_Fields = {
  __typename?: "menu_items_var_samp_fields"
  calories?: Maybe<Scalars["Float"]["output"]>
  price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate variance on columns */
export type Menu_Items_Variance_Fields = {
  __typename?: "menu_items_variance_fields"
  calories?: Maybe<Scalars["Float"]["output"]>
  price?: Maybe<Scalars["Float"]["output"]>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root"
  /** delete data from the table: "cart" */
  delete_cart?: Maybe<Cart_Mutation_Response>
  /** delete single row from the table: "cart" */
  delete_cart_by_pk?: Maybe<Cart>
  /** delete data from the table: "deliveries" */
  delete_deliveries?: Maybe<Deliveries_Mutation_Response>
  /** delete single row from the table: "deliveries" */
  delete_deliveries_by_pk?: Maybe<Deliveries>
  /** delete data from the table: "kitchen_orders" */
  delete_kitchen_orders?: Maybe<Kitchen_Orders_Mutation_Response>
  /** delete single row from the table: "kitchen_orders" */
  delete_kitchen_orders_by_pk?: Maybe<Kitchen_Orders>
  /** delete data from the table: "menu_categories" */
  delete_menu_categories?: Maybe<Menu_Categories_Mutation_Response>
  /** delete single row from the table: "menu_categories" */
  delete_menu_categories_by_pk?: Maybe<Menu_Categories>
  /** delete data from the table: "menu_items" */
  delete_menu_items?: Maybe<Menu_Items_Mutation_Response>
  /** delete single row from the table: "menu_items" */
  delete_menu_items_by_pk?: Maybe<Menu_Items>
  /** delete data from the table: "order_items" */
  delete_order_items?: Maybe<Order_Items_Mutation_Response>
  /** delete single row from the table: "order_items" */
  delete_order_items_by_pk?: Maybe<Order_Items>
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>
  /** delete data from the table: "payments" */
  delete_payments?: Maybe<Payments_Mutation_Response>
  /** delete single row from the table: "payments" */
  delete_payments_by_pk?: Maybe<Payments>
  /** delete data from the table: "reviews" */
  delete_reviews?: Maybe<Reviews_Mutation_Response>
  /** delete single row from the table: "reviews" */
  delete_reviews_by_pk?: Maybe<Reviews>
  /** delete data from the table: "special_offers" */
  delete_special_offers?: Maybe<Special_Offers_Mutation_Response>
  /** delete single row from the table: "special_offers" */
  delete_special_offers_by_pk?: Maybe<Special_Offers>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "cart" */
  insert_cart?: Maybe<Cart_Mutation_Response>
  /** insert a single row into the table: "cart" */
  insert_cart_one?: Maybe<Cart>
  /** insert data into the table: "deliveries" */
  insert_deliveries?: Maybe<Deliveries_Mutation_Response>
  /** insert a single row into the table: "deliveries" */
  insert_deliveries_one?: Maybe<Deliveries>
  /** insert data into the table: "kitchen_orders" */
  insert_kitchen_orders?: Maybe<Kitchen_Orders_Mutation_Response>
  /** insert a single row into the table: "kitchen_orders" */
  insert_kitchen_orders_one?: Maybe<Kitchen_Orders>
  /** insert data into the table: "menu_categories" */
  insert_menu_categories?: Maybe<Menu_Categories_Mutation_Response>
  /** insert a single row into the table: "menu_categories" */
  insert_menu_categories_one?: Maybe<Menu_Categories>
  /** insert data into the table: "menu_items" */
  insert_menu_items?: Maybe<Menu_Items_Mutation_Response>
  /** insert a single row into the table: "menu_items" */
  insert_menu_items_one?: Maybe<Menu_Items>
  /** insert data into the table: "order_items" */
  insert_order_items?: Maybe<Order_Items_Mutation_Response>
  /** insert a single row into the table: "order_items" */
  insert_order_items_one?: Maybe<Order_Items>
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>
  /** insert data into the table: "payments" */
  insert_payments?: Maybe<Payments_Mutation_Response>
  /** insert a single row into the table: "payments" */
  insert_payments_one?: Maybe<Payments>
  /** insert data into the table: "reviews" */
  insert_reviews?: Maybe<Reviews_Mutation_Response>
  /** insert a single row into the table: "reviews" */
  insert_reviews_one?: Maybe<Reviews>
  /** insert data into the table: "special_offers" */
  insert_special_offers?: Maybe<Special_Offers_Mutation_Response>
  /** insert a single row into the table: "special_offers" */
  insert_special_offers_one?: Maybe<Special_Offers>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** login */
  login?: Maybe<LoginResponse>
  /** update data of the table: "cart" */
  update_cart?: Maybe<Cart_Mutation_Response>
  /** update single row of the table: "cart" */
  update_cart_by_pk?: Maybe<Cart>
  /** update multiples rows of table: "cart" */
  update_cart_many?: Maybe<Array<Maybe<Cart_Mutation_Response>>>
  /** update data of the table: "deliveries" */
  update_deliveries?: Maybe<Deliveries_Mutation_Response>
  /** update single row of the table: "deliveries" */
  update_deliveries_by_pk?: Maybe<Deliveries>
  /** update multiples rows of table: "deliveries" */
  update_deliveries_many?: Maybe<Array<Maybe<Deliveries_Mutation_Response>>>
  /** update data of the table: "kitchen_orders" */
  update_kitchen_orders?: Maybe<Kitchen_Orders_Mutation_Response>
  /** update single row of the table: "kitchen_orders" */
  update_kitchen_orders_by_pk?: Maybe<Kitchen_Orders>
  /** update multiples rows of table: "kitchen_orders" */
  update_kitchen_orders_many?: Maybe<
    Array<Maybe<Kitchen_Orders_Mutation_Response>>
  >
  /** update data of the table: "menu_categories" */
  update_menu_categories?: Maybe<Menu_Categories_Mutation_Response>
  /** update single row of the table: "menu_categories" */
  update_menu_categories_by_pk?: Maybe<Menu_Categories>
  /** update multiples rows of table: "menu_categories" */
  update_menu_categories_many?: Maybe<
    Array<Maybe<Menu_Categories_Mutation_Response>>
  >
  /** update data of the table: "menu_items" */
  update_menu_items?: Maybe<Menu_Items_Mutation_Response>
  /** update single row of the table: "menu_items" */
  update_menu_items_by_pk?: Maybe<Menu_Items>
  /** update multiples rows of table: "menu_items" */
  update_menu_items_many?: Maybe<Array<Maybe<Menu_Items_Mutation_Response>>>
  /** update data of the table: "order_items" */
  update_order_items?: Maybe<Order_Items_Mutation_Response>
  /** update single row of the table: "order_items" */
  update_order_items_by_pk?: Maybe<Order_Items>
  /** update multiples rows of table: "order_items" */
  update_order_items_many?: Maybe<Array<Maybe<Order_Items_Mutation_Response>>>
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>
  /** update data of the table: "payments" */
  update_payments?: Maybe<Payments_Mutation_Response>
  /** update single row of the table: "payments" */
  update_payments_by_pk?: Maybe<Payments>
  /** update multiples rows of table: "payments" */
  update_payments_many?: Maybe<Array<Maybe<Payments_Mutation_Response>>>
  /** update data of the table: "reviews" */
  update_reviews?: Maybe<Reviews_Mutation_Response>
  /** update single row of the table: "reviews" */
  update_reviews_by_pk?: Maybe<Reviews>
  /** update multiples rows of table: "reviews" */
  update_reviews_many?: Maybe<Array<Maybe<Reviews_Mutation_Response>>>
  /** update data of the table: "special_offers" */
  update_special_offers?: Maybe<Special_Offers_Mutation_Response>
  /** update single row of the table: "special_offers" */
  update_special_offers_by_pk?: Maybe<Special_Offers>
  /** update multiples rows of table: "special_offers" */
  update_special_offers_many?: Maybe<
    Array<Maybe<Special_Offers_Mutation_Response>>
  >
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootDelete_CartArgs = {
  where: Cart_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Cart_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_DeliveriesArgs = {
  where: Deliveries_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Deliveries_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_Kitchen_OrdersArgs = {
  where: Kitchen_Orders_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Kitchen_Orders_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_Menu_CategoriesArgs = {
  where: Menu_Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Menu_Categories_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_Menu_ItemsArgs = {
  where: Menu_Items_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Menu_Items_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_Order_ItemsArgs = {
  where: Order_Items_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Order_Items_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
  where: Payments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Payments_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_ReviewsArgs = {
  where: Reviews_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Reviews_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_Special_OffersArgs = {
  where: Special_Offers_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Special_Offers_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** mutation root */
export type Mutation_RootInsert_CartArgs = {
  objects: Array<Cart_Insert_Input>
  on_conflict?: InputMaybe<Cart_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Cart_OneArgs = {
  object: Cart_Insert_Input
  on_conflict?: InputMaybe<Cart_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DeliveriesArgs = {
  objects: Array<Deliveries_Insert_Input>
  on_conflict?: InputMaybe<Deliveries_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Deliveries_OneArgs = {
  object: Deliveries_Insert_Input
  on_conflict?: InputMaybe<Deliveries_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Kitchen_OrdersArgs = {
  objects: Array<Kitchen_Orders_Insert_Input>
  on_conflict?: InputMaybe<Kitchen_Orders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Kitchen_Orders_OneArgs = {
  object: Kitchen_Orders_Insert_Input
  on_conflict?: InputMaybe<Kitchen_Orders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Menu_CategoriesArgs = {
  objects: Array<Menu_Categories_Insert_Input>
  on_conflict?: InputMaybe<Menu_Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Menu_Categories_OneArgs = {
  object: Menu_Categories_Insert_Input
  on_conflict?: InputMaybe<Menu_Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Menu_ItemsArgs = {
  objects: Array<Menu_Items_Insert_Input>
  on_conflict?: InputMaybe<Menu_Items_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Menu_Items_OneArgs = {
  object: Menu_Items_Insert_Input
  on_conflict?: InputMaybe<Menu_Items_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_ItemsArgs = {
  objects: Array<Order_Items_Insert_Input>
  on_conflict?: InputMaybe<Order_Items_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Order_Items_OneArgs = {
  object: Order_Items_Insert_Input
  on_conflict?: InputMaybe<Order_Items_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>
  on_conflict?: InputMaybe<Orders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input
  on_conflict?: InputMaybe<Orders_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
  objects: Array<Payments_Insert_Input>
  on_conflict?: InputMaybe<Payments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Payments_OneArgs = {
  object: Payments_Insert_Input
  on_conflict?: InputMaybe<Payments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ReviewsArgs = {
  objects: Array<Reviews_Insert_Input>
  on_conflict?: InputMaybe<Reviews_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Reviews_OneArgs = {
  object: Reviews_Insert_Input
  on_conflict?: InputMaybe<Reviews_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Special_OffersArgs = {
  objects: Array<Special_Offers_Insert_Input>
  on_conflict?: InputMaybe<Special_Offers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Special_Offers_OneArgs = {
  object: Special_Offers_Insert_Input
  on_conflict?: InputMaybe<Special_Offers_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootLoginArgs = {
  email: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
}

/** mutation root */
export type Mutation_RootUpdate_CartArgs = {
  _inc?: InputMaybe<Cart_Inc_Input>
  _set?: InputMaybe<Cart_Set_Input>
  where: Cart_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Cart_By_PkArgs = {
  _inc?: InputMaybe<Cart_Inc_Input>
  _set?: InputMaybe<Cart_Set_Input>
  pk_columns: Cart_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Cart_ManyArgs = {
  updates: Array<Cart_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_DeliveriesArgs = {
  _set?: InputMaybe<Deliveries_Set_Input>
  where: Deliveries_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Deliveries_By_PkArgs = {
  _set?: InputMaybe<Deliveries_Set_Input>
  pk_columns: Deliveries_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Deliveries_ManyArgs = {
  updates: Array<Deliveries_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Kitchen_OrdersArgs = {
  _set?: InputMaybe<Kitchen_Orders_Set_Input>
  where: Kitchen_Orders_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Kitchen_Orders_By_PkArgs = {
  _set?: InputMaybe<Kitchen_Orders_Set_Input>
  pk_columns: Kitchen_Orders_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Kitchen_Orders_ManyArgs = {
  updates: Array<Kitchen_Orders_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Menu_CategoriesArgs = {
  _set?: InputMaybe<Menu_Categories_Set_Input>
  where: Menu_Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Menu_Categories_By_PkArgs = {
  _set?: InputMaybe<Menu_Categories_Set_Input>
  pk_columns: Menu_Categories_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Menu_Categories_ManyArgs = {
  updates: Array<Menu_Categories_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Menu_ItemsArgs = {
  _append?: InputMaybe<Menu_Items_Append_Input>
  _delete_at_path?: InputMaybe<Menu_Items_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Menu_Items_Delete_Elem_Input>
  _delete_key?: InputMaybe<Menu_Items_Delete_Key_Input>
  _inc?: InputMaybe<Menu_Items_Inc_Input>
  _prepend?: InputMaybe<Menu_Items_Prepend_Input>
  _set?: InputMaybe<Menu_Items_Set_Input>
  where: Menu_Items_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Menu_Items_By_PkArgs = {
  _append?: InputMaybe<Menu_Items_Append_Input>
  _delete_at_path?: InputMaybe<Menu_Items_Delete_At_Path_Input>
  _delete_elem?: InputMaybe<Menu_Items_Delete_Elem_Input>
  _delete_key?: InputMaybe<Menu_Items_Delete_Key_Input>
  _inc?: InputMaybe<Menu_Items_Inc_Input>
  _prepend?: InputMaybe<Menu_Items_Prepend_Input>
  _set?: InputMaybe<Menu_Items_Set_Input>
  pk_columns: Menu_Items_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Menu_Items_ManyArgs = {
  updates: Array<Menu_Items_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Order_ItemsArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>
  _set?: InputMaybe<Order_Items_Set_Input>
  where: Order_Items_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Order_Items_By_PkArgs = {
  _inc?: InputMaybe<Order_Items_Inc_Input>
  _set?: InputMaybe<Order_Items_Set_Input>
  pk_columns: Order_Items_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Order_Items_ManyArgs = {
  updates: Array<Order_Items_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>
  _set?: InputMaybe<Orders_Set_Input>
  where: Orders_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>
  _set?: InputMaybe<Orders_Set_Input>
  pk_columns: Orders_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
  _inc?: InputMaybe<Payments_Inc_Input>
  _set?: InputMaybe<Payments_Set_Input>
  where: Payments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Payments_By_PkArgs = {
  _inc?: InputMaybe<Payments_Inc_Input>
  _set?: InputMaybe<Payments_Set_Input>
  pk_columns: Payments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Payments_ManyArgs = {
  updates: Array<Payments_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_ReviewsArgs = {
  _inc?: InputMaybe<Reviews_Inc_Input>
  _set?: InputMaybe<Reviews_Set_Input>
  where: Reviews_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Reviews_By_PkArgs = {
  _inc?: InputMaybe<Reviews_Inc_Input>
  _set?: InputMaybe<Reviews_Set_Input>
  pk_columns: Reviews_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Reviews_ManyArgs = {
  updates: Array<Reviews_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Special_OffersArgs = {
  _inc?: InputMaybe<Special_Offers_Inc_Input>
  _set?: InputMaybe<Special_Offers_Set_Input>
  where: Special_Offers_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Special_Offers_By_PkArgs = {
  _inc?: InputMaybe<Special_Offers_Inc_Input>
  _set?: InputMaybe<Special_Offers_Set_Input>
  pk_columns: Special_Offers_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Special_Offers_ManyArgs = {
  updates: Array<Special_Offers_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["numeric"]["input"]>
  _gt?: InputMaybe<Scalars["numeric"]["input"]>
  _gte?: InputMaybe<Scalars["numeric"]["input"]>
  _in?: InputMaybe<Array<Scalars["numeric"]["input"]>>
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>
  _lt?: InputMaybe<Scalars["numeric"]["input"]>
  _lte?: InputMaybe<Scalars["numeric"]["input"]>
  _neq?: InputMaybe<Scalars["numeric"]["input"]>
  _nin?: InputMaybe<Array<Scalars["numeric"]["input"]>>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "order_items" */
export type Order_Items = {
  __typename?: "order_items"
  id: Scalars["uuid"]["output"]
  menu_item_id: Scalars["uuid"]["output"]
  order_id: Scalars["uuid"]["output"]
  quantity: Scalars["Int"]["output"]
  total_price?: Maybe<Scalars["numeric"]["output"]>
  unit_price: Scalars["numeric"]["output"]
}

/** aggregated selection of "order_items" */
export type Order_Items_Aggregate = {
  __typename?: "order_items_aggregate"
  aggregate?: Maybe<Order_Items_Aggregate_Fields>
  nodes: Array<Order_Items>
}

/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_Fields = {
  __typename?: "order_items_aggregate_fields"
  avg?: Maybe<Order_Items_Avg_Fields>
  count: Scalars["Int"]["output"]
  max?: Maybe<Order_Items_Max_Fields>
  min?: Maybe<Order_Items_Min_Fields>
  stddev?: Maybe<Order_Items_Stddev_Fields>
  stddev_pop?: Maybe<Order_Items_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Order_Items_Stddev_Samp_Fields>
  sum?: Maybe<Order_Items_Sum_Fields>
  var_pop?: Maybe<Order_Items_Var_Pop_Fields>
  var_samp?: Maybe<Order_Items_Var_Samp_Fields>
  variance?: Maybe<Order_Items_Variance_Fields>
}

/** aggregate fields of "order_items" */
export type Order_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Items_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** aggregate avg on columns */
export type Order_Items_Avg_Fields = {
  __typename?: "order_items_avg_fields"
  quantity?: Maybe<Scalars["Float"]["output"]>
  total_price?: Maybe<Scalars["Float"]["output"]>
  unit_price?: Maybe<Scalars["Float"]["output"]>
}

/** Boolean expression to filter rows from the table "order_items". All fields are combined with a logical 'AND'. */
export type Order_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Items_Bool_Exp>>
  _not?: InputMaybe<Order_Items_Bool_Exp>
  _or?: InputMaybe<Array<Order_Items_Bool_Exp>>
  id?: InputMaybe<Uuid_Comparison_Exp>
  menu_item_id?: InputMaybe<Uuid_Comparison_Exp>
  order_id?: InputMaybe<Uuid_Comparison_Exp>
  quantity?: InputMaybe<Int_Comparison_Exp>
  total_price?: InputMaybe<Numeric_Comparison_Exp>
  unit_price?: InputMaybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "order_items" */
export enum Order_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderItemsPkey = "order_items_pkey",
}

/** input type for incrementing numeric columns in table "order_items" */
export type Order_Items_Inc_Input = {
  quantity?: InputMaybe<Scalars["Int"]["input"]>
  unit_price?: InputMaybe<Scalars["numeric"]["input"]>
}

/** input type for inserting data into table "order_items" */
export type Order_Items_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>
  menu_item_id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  quantity?: InputMaybe<Scalars["Int"]["input"]>
  unit_price?: InputMaybe<Scalars["numeric"]["input"]>
}

/** aggregate max on columns */
export type Order_Items_Max_Fields = {
  __typename?: "order_items_max_fields"
  id?: Maybe<Scalars["uuid"]["output"]>
  menu_item_id?: Maybe<Scalars["uuid"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  quantity?: Maybe<Scalars["Int"]["output"]>
  total_price?: Maybe<Scalars["numeric"]["output"]>
  unit_price?: Maybe<Scalars["numeric"]["output"]>
}

/** aggregate min on columns */
export type Order_Items_Min_Fields = {
  __typename?: "order_items_min_fields"
  id?: Maybe<Scalars["uuid"]["output"]>
  menu_item_id?: Maybe<Scalars["uuid"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  quantity?: Maybe<Scalars["Int"]["output"]>
  total_price?: Maybe<Scalars["numeric"]["output"]>
  unit_price?: Maybe<Scalars["numeric"]["output"]>
}

/** response of any mutation on the table "order_items" */
export type Order_Items_Mutation_Response = {
  __typename?: "order_items_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Order_Items>
}

/** on_conflict condition type for table "order_items" */
export type Order_Items_On_Conflict = {
  constraint: Order_Items_Constraint
  update_columns?: Array<Order_Items_Update_Column>
  where?: InputMaybe<Order_Items_Bool_Exp>
}

/** Ordering options when selecting data from "order_items". */
export type Order_Items_Order_By = {
  id?: InputMaybe<Order_By>
  menu_item_id?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  quantity?: InputMaybe<Order_By>
  total_price?: InputMaybe<Order_By>
  unit_price?: InputMaybe<Order_By>
}

/** primary key columns input for table: order_items */
export type Order_Items_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "order_items" */
export enum Order_Items_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  MenuItemId = "menu_item_id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  Quantity = "quantity",
  /** column name */
  TotalPrice = "total_price",
  /** column name */
  UnitPrice = "unit_price",
}

/** input type for updating data in table "order_items" */
export type Order_Items_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>
  menu_item_id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  quantity?: InputMaybe<Scalars["Int"]["input"]>
  unit_price?: InputMaybe<Scalars["numeric"]["input"]>
}

/** aggregate stddev on columns */
export type Order_Items_Stddev_Fields = {
  __typename?: "order_items_stddev_fields"
  quantity?: Maybe<Scalars["Float"]["output"]>
  total_price?: Maybe<Scalars["Float"]["output"]>
  unit_price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_pop on columns */
export type Order_Items_Stddev_Pop_Fields = {
  __typename?: "order_items_stddev_pop_fields"
  quantity?: Maybe<Scalars["Float"]["output"]>
  total_price?: Maybe<Scalars["Float"]["output"]>
  unit_price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_samp on columns */
export type Order_Items_Stddev_Samp_Fields = {
  __typename?: "order_items_stddev_samp_fields"
  quantity?: Maybe<Scalars["Float"]["output"]>
  total_price?: Maybe<Scalars["Float"]["output"]>
  unit_price?: Maybe<Scalars["Float"]["output"]>
}

/** Streaming cursor of the table "order_items" */
export type Order_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Items_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Order_Items_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>
  menu_item_id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  quantity?: InputMaybe<Scalars["Int"]["input"]>
  total_price?: InputMaybe<Scalars["numeric"]["input"]>
  unit_price?: InputMaybe<Scalars["numeric"]["input"]>
}

/** aggregate sum on columns */
export type Order_Items_Sum_Fields = {
  __typename?: "order_items_sum_fields"
  quantity?: Maybe<Scalars["Int"]["output"]>
  total_price?: Maybe<Scalars["numeric"]["output"]>
  unit_price?: Maybe<Scalars["numeric"]["output"]>
}

/** update columns of table "order_items" */
export enum Order_Items_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  MenuItemId = "menu_item_id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  Quantity = "quantity",
  /** column name */
  UnitPrice = "unit_price",
}

export type Order_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Items_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Items_Set_Input>
  /** filter the rows which have to be updated */
  where: Order_Items_Bool_Exp
}

/** aggregate var_pop on columns */
export type Order_Items_Var_Pop_Fields = {
  __typename?: "order_items_var_pop_fields"
  quantity?: Maybe<Scalars["Float"]["output"]>
  total_price?: Maybe<Scalars["Float"]["output"]>
  unit_price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate var_samp on columns */
export type Order_Items_Var_Samp_Fields = {
  __typename?: "order_items_var_samp_fields"
  quantity?: Maybe<Scalars["Float"]["output"]>
  total_price?: Maybe<Scalars["Float"]["output"]>
  unit_price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate variance on columns */
export type Order_Items_Variance_Fields = {
  __typename?: "order_items_variance_fields"
  quantity?: Maybe<Scalars["Float"]["output"]>
  total_price?: Maybe<Scalars["Float"]["output"]>
  unit_price?: Maybe<Scalars["Float"]["output"]>
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: "orders"
  created_at: Scalars["timestamptz"]["output"]
  delivery_address: Scalars["String"]["output"]
  delivery_instructions: Scalars["String"]["output"]
  id: Scalars["uuid"]["output"]
  payment_status: Scalars["String"]["output"]
  status: Scalars["String"]["output"]
  total_amount: Scalars["numeric"]["output"]
  updated_at: Scalars["timestamptz"]["output"]
  user_id: Scalars["uuid"]["output"]
}

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: "orders_aggregate"
  aggregate?: Maybe<Orders_Aggregate_Fields>
  nodes: Array<Orders>
}

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: "orders_aggregate_fields"
  avg?: Maybe<Orders_Avg_Fields>
  count: Scalars["Int"]["output"]
  max?: Maybe<Orders_Max_Fields>
  min?: Maybe<Orders_Min_Fields>
  stddev?: Maybe<Orders_Stddev_Fields>
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>
  sum?: Maybe<Orders_Sum_Fields>
  var_pop?: Maybe<Orders_Var_Pop_Fields>
  var_samp?: Maybe<Orders_Var_Samp_Fields>
  variance?: Maybe<Orders_Variance_Fields>
}

/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: "orders_avg_fields"
  total_amount?: Maybe<Scalars["Float"]["output"]>
}

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>
  _not?: InputMaybe<Orders_Bool_Exp>
  _or?: InputMaybe<Array<Orders_Bool_Exp>>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  delivery_address?: InputMaybe<String_Comparison_Exp>
  delivery_instructions?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  payment_status?: InputMaybe<String_Comparison_Exp>
  status?: InputMaybe<String_Comparison_Exp>
  total_amount?: InputMaybe<Numeric_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  user_id?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = "orders_pkey",
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  total_amount?: InputMaybe<Scalars["numeric"]["input"]>
}

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  delivery_address?: InputMaybe<Scalars["String"]["input"]>
  delivery_instructions?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  payment_status?: InputMaybe<Scalars["String"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
  total_amount?: InputMaybe<Scalars["numeric"]["input"]>
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  user_id?: InputMaybe<Scalars["uuid"]["input"]>
}

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: "orders_max_fields"
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  delivery_address?: Maybe<Scalars["String"]["output"]>
  delivery_instructions?: Maybe<Scalars["String"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  payment_status?: Maybe<Scalars["String"]["output"]>
  status?: Maybe<Scalars["String"]["output"]>
  total_amount?: Maybe<Scalars["numeric"]["output"]>
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>
  user_id?: Maybe<Scalars["uuid"]["output"]>
}

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: "orders_min_fields"
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  delivery_address?: Maybe<Scalars["String"]["output"]>
  delivery_instructions?: Maybe<Scalars["String"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  payment_status?: Maybe<Scalars["String"]["output"]>
  status?: Maybe<Scalars["String"]["output"]>
  total_amount?: Maybe<Scalars["numeric"]["output"]>
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>
  user_id?: Maybe<Scalars["uuid"]["output"]>
}

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: "orders_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Orders>
}

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint
  update_columns?: Array<Orders_Update_Column>
  where?: InputMaybe<Orders_Bool_Exp>
}

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  created_at?: InputMaybe<Order_By>
  delivery_address?: InputMaybe<Order_By>
  delivery_instructions?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  payment_status?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  total_amount?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeliveryAddress = "delivery_address",
  /** column name */
  DeliveryInstructions = "delivery_instructions",
  /** column name */
  Id = "id",
  /** column name */
  PaymentStatus = "payment_status",
  /** column name */
  Status = "status",
  /** column name */
  TotalAmount = "total_amount",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  delivery_address?: InputMaybe<Scalars["String"]["input"]>
  delivery_instructions?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  payment_status?: InputMaybe<Scalars["String"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
  total_amount?: InputMaybe<Scalars["numeric"]["input"]>
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  user_id?: InputMaybe<Scalars["uuid"]["input"]>
}

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: "orders_stddev_fields"
  total_amount?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: "orders_stddev_pop_fields"
  total_amount?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: "orders_stddev_samp_fields"
  total_amount?: Maybe<Scalars["Float"]["output"]>
}

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  delivery_address?: InputMaybe<Scalars["String"]["input"]>
  delivery_instructions?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  payment_status?: InputMaybe<Scalars["String"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
  total_amount?: InputMaybe<Scalars["numeric"]["input"]>
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  user_id?: InputMaybe<Scalars["uuid"]["input"]>
}

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: "orders_sum_fields"
  total_amount?: Maybe<Scalars["numeric"]["output"]>
}

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  DeliveryAddress = "delivery_address",
  /** column name */
  DeliveryInstructions = "delivery_instructions",
  /** column name */
  Id = "id",
  /** column name */
  PaymentStatus = "payment_status",
  /** column name */
  Status = "status",
  /** column name */
  TotalAmount = "total_amount",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  UserId = "user_id",
}

export type Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: "orders_var_pop_fields"
  total_amount?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: "orders_var_samp_fields"
  total_amount?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: "orders_variance_fields"
  total_amount?: Maybe<Scalars["Float"]["output"]>
}

/** columns and relationships of "payments" */
export type Payments = {
  __typename?: "payments"
  amount: Scalars["numeric"]["output"]
  id: Scalars["uuid"]["output"]
  method: Scalars["String"]["output"]
  order_id: Scalars["uuid"]["output"]
  paid_at?: Maybe<Scalars["timestamptz"]["output"]>
  status: Scalars["String"]["output"]
  transaction_id: Scalars["String"]["output"]
}

/** aggregated selection of "payments" */
export type Payments_Aggregate = {
  __typename?: "payments_aggregate"
  aggregate?: Maybe<Payments_Aggregate_Fields>
  nodes: Array<Payments>
}

/** aggregate fields of "payments" */
export type Payments_Aggregate_Fields = {
  __typename?: "payments_aggregate_fields"
  avg?: Maybe<Payments_Avg_Fields>
  count: Scalars["Int"]["output"]
  max?: Maybe<Payments_Max_Fields>
  min?: Maybe<Payments_Min_Fields>
  stddev?: Maybe<Payments_Stddev_Fields>
  stddev_pop?: Maybe<Payments_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Payments_Stddev_Samp_Fields>
  sum?: Maybe<Payments_Sum_Fields>
  var_pop?: Maybe<Payments_Var_Pop_Fields>
  var_samp?: Maybe<Payments_Var_Samp_Fields>
  variance?: Maybe<Payments_Variance_Fields>
}

/** aggregate fields of "payments" */
export type Payments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payments_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
  __typename?: "payments_avg_fields"
  amount?: Maybe<Scalars["Float"]["output"]>
}

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
  _and?: InputMaybe<Array<Payments_Bool_Exp>>
  _not?: InputMaybe<Payments_Bool_Exp>
  _or?: InputMaybe<Array<Payments_Bool_Exp>>
  amount?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  method?: InputMaybe<String_Comparison_Exp>
  order_id?: InputMaybe<Uuid_Comparison_Exp>
  paid_at?: InputMaybe<Timestamptz_Comparison_Exp>
  status?: InputMaybe<String_Comparison_Exp>
  transaction_id?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "payments" */
export enum Payments_Constraint {
  /** unique or primary key constraint on columns "id" */
  PaymentsPkey = "payments_pkey",
}

/** input type for incrementing numeric columns in table "payments" */
export type Payments_Inc_Input = {
  amount?: InputMaybe<Scalars["numeric"]["input"]>
}

/** input type for inserting data into table "payments" */
export type Payments_Insert_Input = {
  amount?: InputMaybe<Scalars["numeric"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  method?: InputMaybe<Scalars["String"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  paid_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
  transaction_id?: InputMaybe<Scalars["String"]["input"]>
}

/** aggregate max on columns */
export type Payments_Max_Fields = {
  __typename?: "payments_max_fields"
  amount?: Maybe<Scalars["numeric"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  method?: Maybe<Scalars["String"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  paid_at?: Maybe<Scalars["timestamptz"]["output"]>
  status?: Maybe<Scalars["String"]["output"]>
  transaction_id?: Maybe<Scalars["String"]["output"]>
}

/** aggregate min on columns */
export type Payments_Min_Fields = {
  __typename?: "payments_min_fields"
  amount?: Maybe<Scalars["numeric"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  method?: Maybe<Scalars["String"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  paid_at?: Maybe<Scalars["timestamptz"]["output"]>
  status?: Maybe<Scalars["String"]["output"]>
  transaction_id?: Maybe<Scalars["String"]["output"]>
}

/** response of any mutation on the table "payments" */
export type Payments_Mutation_Response = {
  __typename?: "payments_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Payments>
}

/** on_conflict condition type for table "payments" */
export type Payments_On_Conflict = {
  constraint: Payments_Constraint
  update_columns?: Array<Payments_Update_Column>
  where?: InputMaybe<Payments_Bool_Exp>
}

/** Ordering options when selecting data from "payments". */
export type Payments_Order_By = {
  amount?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  method?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  paid_at?: InputMaybe<Order_By>
  status?: InputMaybe<Order_By>
  transaction_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: payments */
export type Payments_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "payments" */
export enum Payments_Select_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  Id = "id",
  /** column name */
  Method = "method",
  /** column name */
  OrderId = "order_id",
  /** column name */
  PaidAt = "paid_at",
  /** column name */
  Status = "status",
  /** column name */
  TransactionId = "transaction_id",
}

/** input type for updating data in table "payments" */
export type Payments_Set_Input = {
  amount?: InputMaybe<Scalars["numeric"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  method?: InputMaybe<Scalars["String"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  paid_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
  transaction_id?: InputMaybe<Scalars["String"]["input"]>
}

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
  __typename?: "payments_stddev_fields"
  amount?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
  __typename?: "payments_stddev_pop_fields"
  amount?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
  __typename?: "payments_stddev_samp_fields"
  amount?: Maybe<Scalars["Float"]["output"]>
}

/** Streaming cursor of the table "payments" */
export type Payments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payments_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Payments_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars["numeric"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  method?: InputMaybe<Scalars["String"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  paid_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  status?: InputMaybe<Scalars["String"]["input"]>
  transaction_id?: InputMaybe<Scalars["String"]["input"]>
}

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
  __typename?: "payments_sum_fields"
  amount?: Maybe<Scalars["numeric"]["output"]>
}

/** update columns of table "payments" */
export enum Payments_Update_Column {
  /** column name */
  Amount = "amount",
  /** column name */
  Id = "id",
  /** column name */
  Method = "method",
  /** column name */
  OrderId = "order_id",
  /** column name */
  PaidAt = "paid_at",
  /** column name */
  Status = "status",
  /** column name */
  TransactionId = "transaction_id",
}

export type Payments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Payments_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Payments_Set_Input>
  /** filter the rows which have to be updated */
  where: Payments_Bool_Exp
}

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
  __typename?: "payments_var_pop_fields"
  amount?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
  __typename?: "payments_var_samp_fields"
  amount?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
  __typename?: "payments_variance_fields"
  amount?: Maybe<Scalars["Float"]["output"]>
}

export type Query_Root = {
  __typename?: "query_root"
  /** fetch data from the table: "cart" */
  cart: Array<Cart>
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>
  /** fetch data from the table: "deliveries" */
  deliveries: Array<Deliveries>
  /** fetch aggregated fields from the table: "deliveries" */
  deliveries_aggregate: Deliveries_Aggregate
  /** fetch data from the table: "deliveries" using primary key columns */
  deliveries_by_pk?: Maybe<Deliveries>
  /** fetch data from the table: "kitchen_orders" */
  kitchen_orders: Array<Kitchen_Orders>
  /** fetch aggregated fields from the table: "kitchen_orders" */
  kitchen_orders_aggregate: Kitchen_Orders_Aggregate
  /** fetch data from the table: "kitchen_orders" using primary key columns */
  kitchen_orders_by_pk?: Maybe<Kitchen_Orders>
  /** fetch data from the table: "menu_categories" */
  menu_categories: Array<Menu_Categories>
  /** fetch aggregated fields from the table: "menu_categories" */
  menu_categories_aggregate: Menu_Categories_Aggregate
  /** fetch data from the table: "menu_categories" using primary key columns */
  menu_categories_by_pk?: Maybe<Menu_Categories>
  /** fetch data from the table: "menu_items" */
  menu_items: Array<Menu_Items>
  /** fetch aggregated fields from the table: "menu_items" */
  menu_items_aggregate: Menu_Items_Aggregate
  /** fetch data from the table: "menu_items" using primary key columns */
  menu_items_by_pk?: Maybe<Menu_Items>
  /** fetch data from the table: "order_items" */
  order_items: Array<Order_Items>
  /** fetch aggregated fields from the table: "order_items" */
  order_items_aggregate: Order_Items_Aggregate
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>
  /** fetch data from the table: "orders" */
  orders: Array<Orders>
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>
  /** fetch data from the table: "payments" */
  payments: Array<Payments>
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>
  /** fetch data from the table: "special_offers" */
  special_offers: Array<Special_Offers>
  /** fetch aggregated fields from the table: "special_offers" */
  special_offers_aggregate: Special_Offers_Aggregate
  /** fetch data from the table: "special_offers" using primary key columns */
  special_offers_by_pk?: Maybe<Special_Offers>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type Query_RootCartArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Cart_Order_By>>
  where?: InputMaybe<Cart_Bool_Exp>
}

export type Query_RootCart_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Cart_Order_By>>
  where?: InputMaybe<Cart_Bool_Exp>
}

export type Query_RootCart_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootDeliveriesArgs = {
  distinct_on?: InputMaybe<Array<Deliveries_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Deliveries_Order_By>>
  where?: InputMaybe<Deliveries_Bool_Exp>
}

export type Query_RootDeliveries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deliveries_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Deliveries_Order_By>>
  where?: InputMaybe<Deliveries_Bool_Exp>
}

export type Query_RootDeliveries_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootKitchen_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Kitchen_Orders_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Kitchen_Orders_Order_By>>
  where?: InputMaybe<Kitchen_Orders_Bool_Exp>
}

export type Query_RootKitchen_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kitchen_Orders_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Kitchen_Orders_Order_By>>
  where?: InputMaybe<Kitchen_Orders_Bool_Exp>
}

export type Query_RootKitchen_Orders_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootMenu_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Menu_Categories_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Menu_Categories_Order_By>>
  where?: InputMaybe<Menu_Categories_Bool_Exp>
}

export type Query_RootMenu_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Categories_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Menu_Categories_Order_By>>
  where?: InputMaybe<Menu_Categories_Bool_Exp>
}

export type Query_RootMenu_Categories_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootMenu_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Menu_Items_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Menu_Items_Order_By>>
  where?: InputMaybe<Menu_Items_Bool_Exp>
}

export type Query_RootMenu_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Items_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Menu_Items_Order_By>>
  where?: InputMaybe<Menu_Items_Bool_Exp>
}

export type Query_RootMenu_Items_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Order_Items_Order_By>>
  where?: InputMaybe<Order_Items_Bool_Exp>
}

export type Query_RootOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Order_Items_Order_By>>
  where?: InputMaybe<Order_Items_Bool_Exp>
}

export type Query_RootOrder_Items_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Query_RootOrders_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Payments_Order_By>>
  where?: InputMaybe<Payments_Bool_Exp>
}

export type Query_RootPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Payments_Order_By>>
  where?: InputMaybe<Payments_Bool_Exp>
}

export type Query_RootPayments_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Reviews_Order_By>>
  where?: InputMaybe<Reviews_Bool_Exp>
}

export type Query_RootReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Reviews_Order_By>>
  where?: InputMaybe<Reviews_Bool_Exp>
}

export type Query_RootReviews_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootSpecial_OffersArgs = {
  distinct_on?: InputMaybe<Array<Special_Offers_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Special_Offers_Order_By>>
  where?: InputMaybe<Special_Offers_Bool_Exp>
}

export type Query_RootSpecial_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Special_Offers_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Special_Offers_Order_By>>
  where?: InputMaybe<Special_Offers_Bool_Exp>
}

export type Query_RootSpecial_Offers_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

/** columns and relationships of "reviews" */
export type Reviews = {
  __typename?: "reviews"
  comment: Scalars["String"]["output"]
  created_at: Scalars["timestamptz"]["output"]
  id: Scalars["uuid"]["output"]
  order_id: Scalars["uuid"]["output"]
  rating: Scalars["Int"]["output"]
  user_id: Scalars["uuid"]["output"]
}

/** aggregated selection of "reviews" */
export type Reviews_Aggregate = {
  __typename?: "reviews_aggregate"
  aggregate?: Maybe<Reviews_Aggregate_Fields>
  nodes: Array<Reviews>
}

/** aggregate fields of "reviews" */
export type Reviews_Aggregate_Fields = {
  __typename?: "reviews_aggregate_fields"
  avg?: Maybe<Reviews_Avg_Fields>
  count: Scalars["Int"]["output"]
  max?: Maybe<Reviews_Max_Fields>
  min?: Maybe<Reviews_Min_Fields>
  stddev?: Maybe<Reviews_Stddev_Fields>
  stddev_pop?: Maybe<Reviews_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Reviews_Stddev_Samp_Fields>
  sum?: Maybe<Reviews_Sum_Fields>
  var_pop?: Maybe<Reviews_Var_Pop_Fields>
  var_samp?: Maybe<Reviews_Var_Samp_Fields>
  variance?: Maybe<Reviews_Variance_Fields>
}

/** aggregate fields of "reviews" */
export type Reviews_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Reviews_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** aggregate avg on columns */
export type Reviews_Avg_Fields = {
  __typename?: "reviews_avg_fields"
  rating?: Maybe<Scalars["Float"]["output"]>
}

/** Boolean expression to filter rows from the table "reviews". All fields are combined with a logical 'AND'. */
export type Reviews_Bool_Exp = {
  _and?: InputMaybe<Array<Reviews_Bool_Exp>>
  _not?: InputMaybe<Reviews_Bool_Exp>
  _or?: InputMaybe<Array<Reviews_Bool_Exp>>
  comment?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  order_id?: InputMaybe<Uuid_Comparison_Exp>
  rating?: InputMaybe<Int_Comparison_Exp>
  user_id?: InputMaybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "reviews" */
export enum Reviews_Constraint {
  /** unique or primary key constraint on columns "id" */
  ReviewsPkey = "reviews_pkey",
}

/** input type for incrementing numeric columns in table "reviews" */
export type Reviews_Inc_Input = {
  rating?: InputMaybe<Scalars["Int"]["input"]>
}

/** input type for inserting data into table "reviews" */
export type Reviews_Insert_Input = {
  comment?: InputMaybe<Scalars["String"]["input"]>
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  user_id?: InputMaybe<Scalars["uuid"]["input"]>
}

/** aggregate max on columns */
export type Reviews_Max_Fields = {
  __typename?: "reviews_max_fields"
  comment?: Maybe<Scalars["String"]["output"]>
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  rating?: Maybe<Scalars["Int"]["output"]>
  user_id?: Maybe<Scalars["uuid"]["output"]>
}

/** aggregate min on columns */
export type Reviews_Min_Fields = {
  __typename?: "reviews_min_fields"
  comment?: Maybe<Scalars["String"]["output"]>
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  order_id?: Maybe<Scalars["uuid"]["output"]>
  rating?: Maybe<Scalars["Int"]["output"]>
  user_id?: Maybe<Scalars["uuid"]["output"]>
}

/** response of any mutation on the table "reviews" */
export type Reviews_Mutation_Response = {
  __typename?: "reviews_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Reviews>
}

/** on_conflict condition type for table "reviews" */
export type Reviews_On_Conflict = {
  constraint: Reviews_Constraint
  update_columns?: Array<Reviews_Update_Column>
  where?: InputMaybe<Reviews_Bool_Exp>
}

/** Ordering options when selecting data from "reviews". */
export type Reviews_Order_By = {
  comment?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  order_id?: InputMaybe<Order_By>
  rating?: InputMaybe<Order_By>
  user_id?: InputMaybe<Order_By>
}

/** primary key columns input for table: reviews */
export type Reviews_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "reviews" */
export enum Reviews_Select_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  Rating = "rating",
  /** column name */
  UserId = "user_id",
}

/** input type for updating data in table "reviews" */
export type Reviews_Set_Input = {
  comment?: InputMaybe<Scalars["String"]["input"]>
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  user_id?: InputMaybe<Scalars["uuid"]["input"]>
}

/** aggregate stddev on columns */
export type Reviews_Stddev_Fields = {
  __typename?: "reviews_stddev_fields"
  rating?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_pop on columns */
export type Reviews_Stddev_Pop_Fields = {
  __typename?: "reviews_stddev_pop_fields"
  rating?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_samp on columns */
export type Reviews_Stddev_Samp_Fields = {
  __typename?: "reviews_stddev_samp_fields"
  rating?: Maybe<Scalars["Float"]["output"]>
}

/** Streaming cursor of the table "reviews" */
export type Reviews_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Reviews_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Reviews_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars["String"]["input"]>
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  order_id?: InputMaybe<Scalars["uuid"]["input"]>
  rating?: InputMaybe<Scalars["Int"]["input"]>
  user_id?: InputMaybe<Scalars["uuid"]["input"]>
}

/** aggregate sum on columns */
export type Reviews_Sum_Fields = {
  __typename?: "reviews_sum_fields"
  rating?: Maybe<Scalars["Int"]["output"]>
}

/** update columns of table "reviews" */
export enum Reviews_Update_Column {
  /** column name */
  Comment = "comment",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  OrderId = "order_id",
  /** column name */
  Rating = "rating",
  /** column name */
  UserId = "user_id",
}

export type Reviews_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Reviews_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Reviews_Set_Input>
  /** filter the rows which have to be updated */
  where: Reviews_Bool_Exp
}

/** aggregate var_pop on columns */
export type Reviews_Var_Pop_Fields = {
  __typename?: "reviews_var_pop_fields"
  rating?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate var_samp on columns */
export type Reviews_Var_Samp_Fields = {
  __typename?: "reviews_var_samp_fields"
  rating?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate variance on columns */
export type Reviews_Variance_Fields = {
  __typename?: "reviews_variance_fields"
  rating?: Maybe<Scalars["Float"]["output"]>
}

/** columns and relationships of "special_offers" */
export type Special_Offers = {
  __typename?: "special_offers"
  banner_image?: Maybe<Scalars["String"]["output"]>
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  discount_price: Scalars["numeric"]["output"]
  id: Scalars["uuid"]["output"]
  /** An object relationship */
  menu_item?: Maybe<Menu_Items>
  menu_item_id?: Maybe<Scalars["uuid"]["output"]>
  terms?: Maybe<Array<Scalars["String"]["output"]>>
  title: Scalars["String"]["output"]
  valid_until?: Maybe<Scalars["timestamptz"]["output"]>
}

/** aggregated selection of "special_offers" */
export type Special_Offers_Aggregate = {
  __typename?: "special_offers_aggregate"
  aggregate?: Maybe<Special_Offers_Aggregate_Fields>
  nodes: Array<Special_Offers>
}

/** aggregate fields of "special_offers" */
export type Special_Offers_Aggregate_Fields = {
  __typename?: "special_offers_aggregate_fields"
  avg?: Maybe<Special_Offers_Avg_Fields>
  count: Scalars["Int"]["output"]
  max?: Maybe<Special_Offers_Max_Fields>
  min?: Maybe<Special_Offers_Min_Fields>
  stddev?: Maybe<Special_Offers_Stddev_Fields>
  stddev_pop?: Maybe<Special_Offers_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Special_Offers_Stddev_Samp_Fields>
  sum?: Maybe<Special_Offers_Sum_Fields>
  var_pop?: Maybe<Special_Offers_Var_Pop_Fields>
  var_samp?: Maybe<Special_Offers_Var_Samp_Fields>
  variance?: Maybe<Special_Offers_Variance_Fields>
}

/** aggregate fields of "special_offers" */
export type Special_Offers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Special_Offers_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** aggregate avg on columns */
export type Special_Offers_Avg_Fields = {
  __typename?: "special_offers_avg_fields"
  discount_price?: Maybe<Scalars["Float"]["output"]>
}

/** Boolean expression to filter rows from the table "special_offers". All fields are combined with a logical 'AND'. */
export type Special_Offers_Bool_Exp = {
  _and?: InputMaybe<Array<Special_Offers_Bool_Exp>>
  _not?: InputMaybe<Special_Offers_Bool_Exp>
  _or?: InputMaybe<Array<Special_Offers_Bool_Exp>>
  banner_image?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  discount_price?: InputMaybe<Numeric_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  menu_item?: InputMaybe<Menu_Items_Bool_Exp>
  menu_item_id?: InputMaybe<Uuid_Comparison_Exp>
  terms?: InputMaybe<String_Array_Comparison_Exp>
  title?: InputMaybe<String_Comparison_Exp>
  valid_until?: InputMaybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "special_offers" */
export enum Special_Offers_Constraint {
  /** unique or primary key constraint on columns "id" */
  SpecialOffersPkey = "special_offers_pkey",
}

/** input type for incrementing numeric columns in table "special_offers" */
export type Special_Offers_Inc_Input = {
  discount_price?: InputMaybe<Scalars["numeric"]["input"]>
}

/** input type for inserting data into table "special_offers" */
export type Special_Offers_Insert_Input = {
  banner_image?: InputMaybe<Scalars["String"]["input"]>
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  discount_price?: InputMaybe<Scalars["numeric"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  menu_item?: InputMaybe<Menu_Items_Obj_Rel_Insert_Input>
  menu_item_id?: InputMaybe<Scalars["uuid"]["input"]>
  terms?: InputMaybe<Array<Scalars["String"]["input"]>>
  title?: InputMaybe<Scalars["String"]["input"]>
  valid_until?: InputMaybe<Scalars["timestamptz"]["input"]>
}

/** aggregate max on columns */
export type Special_Offers_Max_Fields = {
  __typename?: "special_offers_max_fields"
  banner_image?: Maybe<Scalars["String"]["output"]>
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  discount_price?: Maybe<Scalars["numeric"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  menu_item_id?: Maybe<Scalars["uuid"]["output"]>
  terms?: Maybe<Array<Scalars["String"]["output"]>>
  title?: Maybe<Scalars["String"]["output"]>
  valid_until?: Maybe<Scalars["timestamptz"]["output"]>
}

/** aggregate min on columns */
export type Special_Offers_Min_Fields = {
  __typename?: "special_offers_min_fields"
  banner_image?: Maybe<Scalars["String"]["output"]>
  created_at?: Maybe<Scalars["timestamptz"]["output"]>
  description?: Maybe<Scalars["String"]["output"]>
  discount_price?: Maybe<Scalars["numeric"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  menu_item_id?: Maybe<Scalars["uuid"]["output"]>
  terms?: Maybe<Array<Scalars["String"]["output"]>>
  title?: Maybe<Scalars["String"]["output"]>
  valid_until?: Maybe<Scalars["timestamptz"]["output"]>
}

/** response of any mutation on the table "special_offers" */
export type Special_Offers_Mutation_Response = {
  __typename?: "special_offers_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Special_Offers>
}

/** input type for inserting object relation for remote table "special_offers" */
export type Special_Offers_Obj_Rel_Insert_Input = {
  data: Special_Offers_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Special_Offers_On_Conflict>
}

/** on_conflict condition type for table "special_offers" */
export type Special_Offers_On_Conflict = {
  constraint: Special_Offers_Constraint
  update_columns?: Array<Special_Offers_Update_Column>
  where?: InputMaybe<Special_Offers_Bool_Exp>
}

/** Ordering options when selecting data from "special_offers". */
export type Special_Offers_Order_By = {
  banner_image?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  discount_price?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  menu_item?: InputMaybe<Menu_Items_Order_By>
  menu_item_id?: InputMaybe<Order_By>
  terms?: InputMaybe<Order_By>
  title?: InputMaybe<Order_By>
  valid_until?: InputMaybe<Order_By>
}

/** primary key columns input for table: special_offers */
export type Special_Offers_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "special_offers" */
export enum Special_Offers_Select_Column {
  /** column name */
  BannerImage = "banner_image",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  DiscountPrice = "discount_price",
  /** column name */
  Id = "id",
  /** column name */
  MenuItemId = "menu_item_id",
  /** column name */
  Terms = "terms",
  /** column name */
  Title = "title",
  /** column name */
  ValidUntil = "valid_until",
}

/** input type for updating data in table "special_offers" */
export type Special_Offers_Set_Input = {
  banner_image?: InputMaybe<Scalars["String"]["input"]>
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  discount_price?: InputMaybe<Scalars["numeric"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  menu_item_id?: InputMaybe<Scalars["uuid"]["input"]>
  terms?: InputMaybe<Array<Scalars["String"]["input"]>>
  title?: InputMaybe<Scalars["String"]["input"]>
  valid_until?: InputMaybe<Scalars["timestamptz"]["input"]>
}

/** aggregate stddev on columns */
export type Special_Offers_Stddev_Fields = {
  __typename?: "special_offers_stddev_fields"
  discount_price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_pop on columns */
export type Special_Offers_Stddev_Pop_Fields = {
  __typename?: "special_offers_stddev_pop_fields"
  discount_price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate stddev_samp on columns */
export type Special_Offers_Stddev_Samp_Fields = {
  __typename?: "special_offers_stddev_samp_fields"
  discount_price?: Maybe<Scalars["Float"]["output"]>
}

/** Streaming cursor of the table "special_offers" */
export type Special_Offers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Special_Offers_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Special_Offers_Stream_Cursor_Value_Input = {
  banner_image?: InputMaybe<Scalars["String"]["input"]>
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  description?: InputMaybe<Scalars["String"]["input"]>
  discount_price?: InputMaybe<Scalars["numeric"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  menu_item_id?: InputMaybe<Scalars["uuid"]["input"]>
  terms?: InputMaybe<Array<Scalars["String"]["input"]>>
  title?: InputMaybe<Scalars["String"]["input"]>
  valid_until?: InputMaybe<Scalars["timestamptz"]["input"]>
}

/** aggregate sum on columns */
export type Special_Offers_Sum_Fields = {
  __typename?: "special_offers_sum_fields"
  discount_price?: Maybe<Scalars["numeric"]["output"]>
}

/** update columns of table "special_offers" */
export enum Special_Offers_Update_Column {
  /** column name */
  BannerImage = "banner_image",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Description = "description",
  /** column name */
  DiscountPrice = "discount_price",
  /** column name */
  Id = "id",
  /** column name */
  MenuItemId = "menu_item_id",
  /** column name */
  Terms = "terms",
  /** column name */
  Title = "title",
  /** column name */
  ValidUntil = "valid_until",
}

export type Special_Offers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Special_Offers_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Special_Offers_Set_Input>
  /** filter the rows which have to be updated */
  where: Special_Offers_Bool_Exp
}

/** aggregate var_pop on columns */
export type Special_Offers_Var_Pop_Fields = {
  __typename?: "special_offers_var_pop_fields"
  discount_price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate var_samp on columns */
export type Special_Offers_Var_Samp_Fields = {
  __typename?: "special_offers_var_samp_fields"
  discount_price?: Maybe<Scalars["Float"]["output"]>
}

/** aggregate variance on columns */
export type Special_Offers_Variance_Fields = {
  __typename?: "special_offers_variance_fields"
  discount_price?: Maybe<Scalars["Float"]["output"]>
}

export type Subscription_Root = {
  __typename?: "subscription_root"
  /** fetch data from the table: "cart" */
  cart: Array<Cart>
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk?: Maybe<Cart>
  /** fetch data from the table in a streaming manner: "cart" */
  cart_stream: Array<Cart>
  /** fetch data from the table: "deliveries" */
  deliveries: Array<Deliveries>
  /** fetch aggregated fields from the table: "deliveries" */
  deliveries_aggregate: Deliveries_Aggregate
  /** fetch data from the table: "deliveries" using primary key columns */
  deliveries_by_pk?: Maybe<Deliveries>
  /** fetch data from the table in a streaming manner: "deliveries" */
  deliveries_stream: Array<Deliveries>
  /** fetch data from the table: "kitchen_orders" */
  kitchen_orders: Array<Kitchen_Orders>
  /** fetch aggregated fields from the table: "kitchen_orders" */
  kitchen_orders_aggregate: Kitchen_Orders_Aggregate
  /** fetch data from the table: "kitchen_orders" using primary key columns */
  kitchen_orders_by_pk?: Maybe<Kitchen_Orders>
  /** fetch data from the table in a streaming manner: "kitchen_orders" */
  kitchen_orders_stream: Array<Kitchen_Orders>
  /** fetch data from the table: "menu_categories" */
  menu_categories: Array<Menu_Categories>
  /** fetch aggregated fields from the table: "menu_categories" */
  menu_categories_aggregate: Menu_Categories_Aggregate
  /** fetch data from the table: "menu_categories" using primary key columns */
  menu_categories_by_pk?: Maybe<Menu_Categories>
  /** fetch data from the table in a streaming manner: "menu_categories" */
  menu_categories_stream: Array<Menu_Categories>
  /** fetch data from the table: "menu_items" */
  menu_items: Array<Menu_Items>
  /** fetch aggregated fields from the table: "menu_items" */
  menu_items_aggregate: Menu_Items_Aggregate
  /** fetch data from the table: "menu_items" using primary key columns */
  menu_items_by_pk?: Maybe<Menu_Items>
  /** fetch data from the table in a streaming manner: "menu_items" */
  menu_items_stream: Array<Menu_Items>
  /** fetch data from the table: "order_items" */
  order_items: Array<Order_Items>
  /** fetch aggregated fields from the table: "order_items" */
  order_items_aggregate: Order_Items_Aggregate
  /** fetch data from the table: "order_items" using primary key columns */
  order_items_by_pk?: Maybe<Order_Items>
  /** fetch data from the table in a streaming manner: "order_items" */
  order_items_stream: Array<Order_Items>
  /** fetch data from the table: "orders" */
  orders: Array<Orders>
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>
  /** fetch data from the table: "payments" */
  payments: Array<Payments>
  /** fetch aggregated fields from the table: "payments" */
  payments_aggregate: Payments_Aggregate
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>
  /** fetch data from the table in a streaming manner: "payments" */
  payments_stream: Array<Payments>
  /** fetch data from the table: "reviews" */
  reviews: Array<Reviews>
  /** fetch aggregated fields from the table: "reviews" */
  reviews_aggregate: Reviews_Aggregate
  /** fetch data from the table: "reviews" using primary key columns */
  reviews_by_pk?: Maybe<Reviews>
  /** fetch data from the table in a streaming manner: "reviews" */
  reviews_stream: Array<Reviews>
  /** fetch data from the table: "special_offers" */
  special_offers: Array<Special_Offers>
  /** fetch aggregated fields from the table: "special_offers" */
  special_offers_aggregate: Special_Offers_Aggregate
  /** fetch data from the table: "special_offers" using primary key columns */
  special_offers_by_pk?: Maybe<Special_Offers>
  /** fetch data from the table in a streaming manner: "special_offers" */
  special_offers_stream: Array<Special_Offers>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>
}

export type Subscription_RootCartArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Cart_Order_By>>
  where?: InputMaybe<Cart_Bool_Exp>
}

export type Subscription_RootCart_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cart_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Cart_Order_By>>
  where?: InputMaybe<Cart_Bool_Exp>
}

export type Subscription_RootCart_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootCart_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Cart_Stream_Cursor_Input>>
  where?: InputMaybe<Cart_Bool_Exp>
}

export type Subscription_RootDeliveriesArgs = {
  distinct_on?: InputMaybe<Array<Deliveries_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Deliveries_Order_By>>
  where?: InputMaybe<Deliveries_Bool_Exp>
}

export type Subscription_RootDeliveries_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deliveries_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Deliveries_Order_By>>
  where?: InputMaybe<Deliveries_Bool_Exp>
}

export type Subscription_RootDeliveries_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootDeliveries_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Deliveries_Stream_Cursor_Input>>
  where?: InputMaybe<Deliveries_Bool_Exp>
}

export type Subscription_RootKitchen_OrdersArgs = {
  distinct_on?: InputMaybe<Array<Kitchen_Orders_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Kitchen_Orders_Order_By>>
  where?: InputMaybe<Kitchen_Orders_Bool_Exp>
}

export type Subscription_RootKitchen_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kitchen_Orders_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Kitchen_Orders_Order_By>>
  where?: InputMaybe<Kitchen_Orders_Bool_Exp>
}

export type Subscription_RootKitchen_Orders_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootKitchen_Orders_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Kitchen_Orders_Stream_Cursor_Input>>
  where?: InputMaybe<Kitchen_Orders_Bool_Exp>
}

export type Subscription_RootMenu_CategoriesArgs = {
  distinct_on?: InputMaybe<Array<Menu_Categories_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Menu_Categories_Order_By>>
  where?: InputMaybe<Menu_Categories_Bool_Exp>
}

export type Subscription_RootMenu_Categories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Categories_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Menu_Categories_Order_By>>
  where?: InputMaybe<Menu_Categories_Bool_Exp>
}

export type Subscription_RootMenu_Categories_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootMenu_Categories_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Menu_Categories_Stream_Cursor_Input>>
  where?: InputMaybe<Menu_Categories_Bool_Exp>
}

export type Subscription_RootMenu_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Menu_Items_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Menu_Items_Order_By>>
  where?: InputMaybe<Menu_Items_Bool_Exp>
}

export type Subscription_RootMenu_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Menu_Items_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Menu_Items_Order_By>>
  where?: InputMaybe<Menu_Items_Bool_Exp>
}

export type Subscription_RootMenu_Items_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootMenu_Items_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Menu_Items_Stream_Cursor_Input>>
  where?: InputMaybe<Menu_Items_Bool_Exp>
}

export type Subscription_RootOrder_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Order_Items_Order_By>>
  where?: InputMaybe<Order_Items_Bool_Exp>
}

export type Subscription_RootOrder_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Items_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Order_Items_Order_By>>
  where?: InputMaybe<Order_Items_Bool_Exp>
}

export type Subscription_RootOrder_Items_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootOrder_Items_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Order_Items_Stream_Cursor_Input>>
  where?: InputMaybe<Order_Items_Bool_Exp>
}

export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Orders_Order_By>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>
  where?: InputMaybe<Orders_Bool_Exp>
}

export type Subscription_RootPaymentsArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Payments_Order_By>>
  where?: InputMaybe<Payments_Bool_Exp>
}

export type Subscription_RootPayments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payments_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Payments_Order_By>>
  where?: InputMaybe<Payments_Bool_Exp>
}

export type Subscription_RootPayments_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootPayments_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Payments_Stream_Cursor_Input>>
  where?: InputMaybe<Payments_Bool_Exp>
}

export type Subscription_RootReviewsArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Reviews_Order_By>>
  where?: InputMaybe<Reviews_Bool_Exp>
}

export type Subscription_RootReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Reviews_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Reviews_Order_By>>
  where?: InputMaybe<Reviews_Bool_Exp>
}

export type Subscription_RootReviews_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootReviews_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Reviews_Stream_Cursor_Input>>
  where?: InputMaybe<Reviews_Bool_Exp>
}

export type Subscription_RootSpecial_OffersArgs = {
  distinct_on?: InputMaybe<Array<Special_Offers_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Special_Offers_Order_By>>
  where?: InputMaybe<Special_Offers_Bool_Exp>
}

export type Subscription_RootSpecial_Offers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Special_Offers_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Special_Offers_Order_By>>
  where?: InputMaybe<Special_Offers_Bool_Exp>
}

export type Subscription_RootSpecial_Offers_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootSpecial_Offers_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Special_Offers_Stream_Cursor_Input>>
  where?: InputMaybe<Special_Offers_Bool_Exp>
}

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  order_by?: InputMaybe<Array<Users_Order_By>>
  where?: InputMaybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars["uuid"]["input"]
}

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"]["input"]
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamp"]["input"]>
  _gt?: InputMaybe<Scalars["timestamp"]["input"]>
  _gte?: InputMaybe<Scalars["timestamp"]["input"]>
  _in?: InputMaybe<Array<Scalars["timestamp"]["input"]>>
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>
  _lt?: InputMaybe<Scalars["timestamp"]["input"]>
  _lte?: InputMaybe<Scalars["timestamp"]["input"]>
  _neq?: InputMaybe<Scalars["timestamp"]["input"]>
  _nin?: InputMaybe<Array<Scalars["timestamp"]["input"]>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: "users"
  avatar_url?: Maybe<Scalars["String"]["output"]>
  created_at: Scalars["timestamp"]["output"]
  email: Scalars["String"]["output"]
  id: Scalars["uuid"]["output"]
  name: Scalars["String"]["output"]
  password: Scalars["String"]["output"]
  phone?: Maybe<Scalars["String"]["output"]>
  role: Scalars["String"]["output"]
  updated_at: Scalars["timestamptz"]["output"]
  username?: Maybe<Scalars["String"]["output"]>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate"
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields"
  count: Scalars["Int"]["output"]
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>
  _not?: InputMaybe<Users_Bool_Exp>
  _or?: InputMaybe<Array<Users_Bool_Exp>>
  avatar_url?: InputMaybe<String_Comparison_Exp>
  created_at?: InputMaybe<Timestamp_Comparison_Exp>
  email?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  password?: InputMaybe<String_Comparison_Exp>
  phone?: InputMaybe<String_Comparison_Exp>
  role?: InputMaybe<String_Comparison_Exp>
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>
  username?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = "users_email_key",
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = "users_phone_key",
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>
  email?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  password?: InputMaybe<Scalars["String"]["input"]>
  phone?: InputMaybe<Scalars["String"]["input"]>
  role?: InputMaybe<Scalars["String"]["input"]>
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  username?: InputMaybe<Scalars["String"]["input"]>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields"
  avatar_url?: Maybe<Scalars["String"]["output"]>
  created_at?: Maybe<Scalars["timestamp"]["output"]>
  email?: Maybe<Scalars["String"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  password?: Maybe<Scalars["String"]["output"]>
  phone?: Maybe<Scalars["String"]["output"]>
  role?: Maybe<Scalars["String"]["output"]>
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>
  username?: Maybe<Scalars["String"]["output"]>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields"
  avatar_url?: Maybe<Scalars["String"]["output"]>
  created_at?: Maybe<Scalars["timestamp"]["output"]>
  email?: Maybe<Scalars["String"]["output"]>
  id?: Maybe<Scalars["uuid"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  password?: Maybe<Scalars["String"]["output"]>
  phone?: Maybe<Scalars["String"]["output"]>
  role?: Maybe<Scalars["String"]["output"]>
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>
  username?: Maybe<Scalars["String"]["output"]>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response"
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"]
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>
}

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: InputMaybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  avatar_url?: InputMaybe<Order_By>
  created_at?: InputMaybe<Order_By>
  email?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  password?: InputMaybe<Order_By>
  phone?: InputMaybe<Order_By>
  role?: InputMaybe<Order_By>
  updated_at?: InputMaybe<Order_By>
  username?: InputMaybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"]
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = "avatar_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Password = "password",
  /** column name */
  Phone = "phone",
  /** column name */
  Role = "role",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>
  email?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  password?: InputMaybe<Scalars["String"]["input"]>
  phone?: InputMaybe<Scalars["String"]["input"]>
  role?: InputMaybe<Scalars["String"]["input"]>
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  username?: InputMaybe<Scalars["String"]["input"]>
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  avatar_url?: InputMaybe<Scalars["String"]["input"]>
  created_at?: InputMaybe<Scalars["timestamp"]["input"]>
  email?: InputMaybe<Scalars["String"]["input"]>
  id?: InputMaybe<Scalars["uuid"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  password?: InputMaybe<Scalars["String"]["input"]>
  phone?: InputMaybe<Scalars["String"]["input"]>
  role?: InputMaybe<Scalars["String"]["input"]>
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>
  username?: InputMaybe<Scalars["String"]["input"]>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = "avatar_url",
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  Password = "password",
  /** column name */
  Phone = "phone",
  /** column name */
  Role = "role",
  /** column name */
  UpdatedAt = "updated_at",
  /** column name */
  Username = "username",
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>
  _gt?: InputMaybe<Scalars["uuid"]["input"]>
  _gte?: InputMaybe<Scalars["uuid"]["input"]>
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>
  _lt?: InputMaybe<Scalars["uuid"]["input"]>
  _lte?: InputMaybe<Scalars["uuid"]["input"]>
  _neq?: InputMaybe<Scalars["uuid"]["input"]>
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>
}

export type AddToCartMutationVariables = Exact<{
  user_id: Scalars["uuid"]["input"]
  menu_item_id: Scalars["uuid"]["input"]
  quantity: Scalars["Int"]["input"]
  special_offer_id?: InputMaybe<Scalars["uuid"]["input"]>
  price_at_purchase: Scalars["numeric"]["input"]
}>

export type AddToCartMutation = {
  __typename?: "mutation_root"
  insert_cart_one?: {
    __typename?: "cart"
    menu_item: { __typename?: "menu_items"; name: string }
  } | null
}

export type CreateOrderMutationVariables = Exact<{
  user_id: Scalars["uuid"]["input"]
  total_amount: Scalars["numeric"]["input"]
  delivery_address: Scalars["String"]["input"]
  delivery_instructions?: InputMaybe<Scalars["String"]["input"]>
}>

export type CreateOrderMutation = {
  __typename?: "mutation_root"
  insert_orders_one?: {
    __typename?: "orders"
    id: any
    user_id: any
    total_amount: any
    status: string
    payment_status: string
    delivery_address: string
    delivery_instructions: string
    created_at: any
    updated_at: any
  } | null
}

export type CreateOrderItemsMutationVariables = Exact<{
  order_id: Scalars["uuid"]["input"]
  menu_item_id: Scalars["uuid"]["input"]
  quantity: Scalars["Int"]["input"]
  unit_price: Scalars["numeric"]["input"]
}>

export type CreateOrderItemsMutation = {
  __typename?: "mutation_root"
  insert_order_items_one?: {
    __typename?: "order_items"
    id: any
    order_id: any
    menu_item_id: any
    quantity: number
    unit_price: any
    total_price?: any | null
  } | null
}

export type DeleteCartItemMutationVariables = Exact<{
  id: Scalars["uuid"]["input"]
}>

export type DeleteCartItemMutation = {
  __typename?: "mutation_root"
  delete_cart_by_pk?: { __typename?: "cart"; id: any } | null
}

export type UpdateCartItemMutationVariables = Exact<{
  id: Scalars["uuid"]["input"]
  quantity: Scalars["Int"]["input"]
}>

export type UpdateCartItemMutation = {
  __typename?: "mutation_root"
  update_cart_by_pk?: { __typename?: "cart"; id: any; quantity: number } | null
}

export type GetUserCartQueryVariables = Exact<{
  user_id: Scalars["uuid"]["input"]
}>

export type GetUserCartQuery = {
  __typename?: "query_root"
  cart: Array<{
    __typename?: "cart"
    id: any
    quantity: number
    added_at?: any | null
    price_at_purchase: any
    user: { __typename?: "users"; id: any; name: string; email: string }
    menu_item: {
      __typename?: "menu_items"
      id: any
      name: string
      description: string
      price: any
      image_url: string
      is_available: boolean
    }
    special_offer?: {
      __typename?: "special_offers"
      id: any
      discount_price: any
      title: string
    } | null
  }>
}

export type GetOfferByIdQueryVariables = Exact<{
  id: Scalars["uuid"]["input"]
}>

export type GetOfferByIdQuery = {
  __typename?: "query_root"
  special_offers_by_pk?: {
    __typename?: "special_offers"
    id: any
    title: string
    description?: string | null
    discount_price: any
    valid_until?: any | null
    banner_image?: string | null
    terms?: Array<string> | null
    menu_item?: {
      __typename?: "menu_items"
      id: any
      name: string
      price: any
      description: string
      image_url: string
      is_available: boolean
    } | null
  } | null
}

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["uuid"]["input"]
}>

export type GetUserByIdQuery = {
  __typename?: "query_root"
  users_by_pk?: {
    __typename?: "users"
    id: any
    name: string
    email: string
    role: string
    avatar_url?: string | null
    username?: string | null
  } | null
}

export type GetMenuQueryVariables = Exact<{ [key: string]: never }>

export type GetMenuQuery = {
  __typename?: "query_root"
  menu_items: Array<{
    __typename?: "menu_items"
    id: any
    category_id: any
    name: string
    description: string
    ingredients: string
    price: any
    calories?: any | null
    allergens: any
    image_url: string
    is_available: boolean
    created_at: any
    updated_at: any
  }>
}

export type GetMenuItemByIdQueryVariables = Exact<{
  id: Scalars["uuid"]["input"]
}>

export type GetMenuItemByIdQuery = {
  __typename?: "query_root"
  menu_items_by_pk?: {
    __typename?: "menu_items"
    id: any
    category_id: any
    name: string
    description: string
    ingredients: string
    price: any
    calories?: any | null
    allergens: any
    image_url: string
    is_available: boolean
    created_at: any
    updated_at: any
  } | null
}

export type GetMenuCategoriesQueryVariables = Exact<{ [key: string]: never }>

export type GetMenuCategoriesQuery = {
  __typename?: "query_root"
  menu_categories: Array<{
    __typename?: "menu_categories"
    id: any
    name: string
    description: string
    image_url: string
    created_at: any
  }>
}

export type GetOrdersQueryVariables = Exact<{ [key: string]: never }>

export type GetOrdersQuery = {
  __typename?: "query_root"
  orders: Array<{
    __typename?: "orders"
    id: any
    user_id: any
    total_amount: any
    status: string
    payment_status: string
    delivery_address: string
    delivery_instructions: string
    created_at: any
    updated_at: any
  }>
}

export type SearchMenuQueryVariables = Exact<{
  search: Scalars["String"]["input"]
}>

export type SearchMenuQuery = {
  __typename?: "query_root"
  menu_items: Array<{
    __typename?: "menu_items"
    id: any
    name: string
    description: string
    price: any
    category_id: any
    image_url: string
    is_available: boolean
  }>
}

export type GetSpecialOffersQueryVariables = Exact<{ [key: string]: never }>

export type GetSpecialOffersQuery = {
  __typename?: "query_root"
  special_offers: Array<{
    __typename?: "special_offers"
    id: any
    title: string
    discount_price: any
    banner_image?: string | null
    menu_item?: {
      __typename?: "menu_items"
      id: any
      name: string
      price: any
      description: string
      image_url: string
      is_available: boolean
    } | null
  }>
}

export type GetLiveOrdersSubscriptionVariables = Exact<{ [key: string]: never }>

export type GetLiveOrdersSubscription = {
  __typename?: "subscription_root"
  orders: Array<{
    __typename?: "orders"
    id: any
    user_id: any
    total_amount: any
    status: string
    payment_status: string
    delivery_address: string
    delivery_instructions: string
    created_at: any
    updated_at: any
  }>
}

export const AddToCartDocument = gql`
  mutation AddToCart(
    $user_id: uuid!
    $menu_item_id: uuid!
    $quantity: Int!
    $special_offer_id: uuid
    $price_at_purchase: numeric!
  ) {
    insert_cart_one(
      object: {
        user_id: $user_id
        menu_item_id: $menu_item_id
        quantity: $quantity
        special_offer_id: $special_offer_id
        price_at_purchase: $price_at_purchase
      }
    ) {
      menu_item {
        name
      }
    }
  }
`
export type AddToCartMutationFn = Apollo.MutationFunction<
  AddToCartMutation,
  AddToCartMutationVariables
>

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      menu_item_id: // value for 'menu_item_id'
 *      quantity: // value for 'quantity'
 *      special_offer_id: // value for 'special_offer_id'
 *      price_at_purchase: // value for 'price_at_purchase'
 *   },
 * });
 */
export function useAddToCartMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddToCartMutation,
    AddToCartMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(
    AddToCartDocument,
    options
  )
}
export type AddToCartMutationHookResult = ReturnType<
  typeof useAddToCartMutation
>
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<
  AddToCartMutation,
  AddToCartMutationVariables
>
export const CreateOrderDocument = gql`
  mutation CreateOrder(
    $user_id: uuid!
    $total_amount: numeric!
    $delivery_address: String!
    $delivery_instructions: String
  ) {
    insert_orders_one(
      object: {
        user_id: $user_id
        total_amount: $total_amount
        delivery_address: $delivery_address
        delivery_instructions: $delivery_instructions
      }
    ) {
      id
      user_id
      total_amount
      status
      payment_status
      delivery_address
      delivery_instructions
      created_at
      updated_at
    }
  }
`
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      total_amount: // value for 'total_amount'
 *      delivery_address: // value for 'delivery_address'
 *      delivery_instructions: // value for 'delivery_instructions'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    options
  )
}
export type CreateOrderMutationHookResult = ReturnType<
  typeof useCreateOrderMutation
>
export type CreateOrderMutationResult =
  Apollo.MutationResult<CreateOrderMutation>
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>
export const CreateOrderItemsDocument = gql`
  mutation CreateOrderItems(
    $order_id: uuid!
    $menu_item_id: uuid!
    $quantity: Int!
    $unit_price: numeric!
  ) {
    insert_order_items_one(
      object: {
        order_id: $order_id
        menu_item_id: $menu_item_id
        quantity: $quantity
        unit_price: $unit_price
      }
    ) {
      id
      order_id
      menu_item_id
      quantity
      unit_price
      total_price
    }
  }
`
export type CreateOrderItemsMutationFn = Apollo.MutationFunction<
  CreateOrderItemsMutation,
  CreateOrderItemsMutationVariables
>

/**
 * __useCreateOrderItemsMutation__
 *
 * To run a mutation, you first call `useCreateOrderItemsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderItemsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderItemsMutation, { data, loading, error }] = useCreateOrderItemsMutation({
 *   variables: {
 *      order_id: // value for 'order_id'
 *      menu_item_id: // value for 'menu_item_id'
 *      quantity: // value for 'quantity'
 *      unit_price: // value for 'unit_price'
 *   },
 * });
 */
export function useCreateOrderItemsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrderItemsMutation,
    CreateOrderItemsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateOrderItemsMutation,
    CreateOrderItemsMutationVariables
  >(CreateOrderItemsDocument, options)
}
export type CreateOrderItemsMutationHookResult = ReturnType<
  typeof useCreateOrderItemsMutation
>
export type CreateOrderItemsMutationResult =
  Apollo.MutationResult<CreateOrderItemsMutation>
export type CreateOrderItemsMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderItemsMutation,
  CreateOrderItemsMutationVariables
>
export const DeleteCartItemDocument = gql`
  mutation DeleteCartItem($id: uuid!) {
    delete_cart_by_pk(id: $id) {
      id
    }
  }
`
export type DeleteCartItemMutationFn = Apollo.MutationFunction<
  DeleteCartItemMutation,
  DeleteCartItemMutationVariables
>

/**
 * __useDeleteCartItemMutation__
 *
 * To run a mutation, you first call `useDeleteCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCartItemMutation, { data, loading, error }] = useDeleteCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCartItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCartItemMutation,
    DeleteCartItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteCartItemMutation,
    DeleteCartItemMutationVariables
  >(DeleteCartItemDocument, options)
}
export type DeleteCartItemMutationHookResult = ReturnType<
  typeof useDeleteCartItemMutation
>
export type DeleteCartItemMutationResult =
  Apollo.MutationResult<DeleteCartItemMutation>
export type DeleteCartItemMutationOptions = Apollo.BaseMutationOptions<
  DeleteCartItemMutation,
  DeleteCartItemMutationVariables
>
export const UpdateCartItemDocument = gql`
  mutation UpdateCartItem($id: uuid!, $quantity: Int!) {
    update_cart_by_pk(pk_columns: { id: $id }, _set: { quantity: $quantity }) {
      id
      quantity
    }
  }
`
export type UpdateCartItemMutationFn = Apollo.MutationFunction<
  UpdateCartItemMutation,
  UpdateCartItemMutationVariables
>

/**
 * __useUpdateCartItemMutation__
 *
 * To run a mutation, you first call `useUpdateCartItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCartItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCartItemMutation, { data, loading, error }] = useUpdateCartItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      quantity: // value for 'quantity'
 *   },
 * });
 */
export function useUpdateCartItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCartItemMutation,
    UpdateCartItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateCartItemMutation,
    UpdateCartItemMutationVariables
  >(UpdateCartItemDocument, options)
}
export type UpdateCartItemMutationHookResult = ReturnType<
  typeof useUpdateCartItemMutation
>
export type UpdateCartItemMutationResult =
  Apollo.MutationResult<UpdateCartItemMutation>
export type UpdateCartItemMutationOptions = Apollo.BaseMutationOptions<
  UpdateCartItemMutation,
  UpdateCartItemMutationVariables
>
export const GetUserCartDocument = gql`
  query GetUserCart($user_id: uuid!) {
    cart(where: { user_id: { _eq: $user_id } }) {
      id
      quantity
      added_at
      price_at_purchase
      user {
        id
        name
        email
      }
      menu_item {
        id
        name
        description
        price
        image_url
        is_available
      }
      special_offer {
        id
        discount_price
        title
      }
    }
  }
`

/**
 * __useGetUserCartQuery__
 *
 * To run a query within a React component, call `useGetUserCartQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCartQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCartQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserCartQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserCartQuery,
    GetUserCartQueryVariables
  > &
    (
      | { variables: GetUserCartQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserCartQuery, GetUserCartQueryVariables>(
    GetUserCartDocument,
    options
  )
}
export function useGetUserCartLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserCartQuery,
    GetUserCartQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserCartQuery, GetUserCartQueryVariables>(
    GetUserCartDocument,
    options
  )
}
export function useGetUserCartSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetUserCartQuery,
        GetUserCartQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserCartQuery, GetUserCartQueryVariables>(
    GetUserCartDocument,
    options
  )
}
export type GetUserCartQueryHookResult = ReturnType<typeof useGetUserCartQuery>
export type GetUserCartLazyQueryHookResult = ReturnType<
  typeof useGetUserCartLazyQuery
>
export type GetUserCartSuspenseQueryHookResult = ReturnType<
  typeof useGetUserCartSuspenseQuery
>
export type GetUserCartQueryResult = Apollo.QueryResult<
  GetUserCartQuery,
  GetUserCartQueryVariables
>
export const GetOfferByIdDocument = gql`
  query GetOfferById($id: uuid!) {
    special_offers_by_pk(id: $id) {
      id
      title
      description
      discount_price
      valid_until
      banner_image
      terms
      menu_item {
        id
        name
        price
        description
        image_url
        is_available
      }
    }
  }
`

/**
 * __useGetOfferByIdQuery__
 *
 * To run a query within a React component, call `useGetOfferByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOfferByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOfferByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetOfferByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOfferByIdQuery,
    GetOfferByIdQueryVariables
  > &
    (
      | { variables: GetOfferByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOfferByIdQuery, GetOfferByIdQueryVariables>(
    GetOfferByIdDocument,
    options
  )
}
export function useGetOfferByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOfferByIdQuery,
    GetOfferByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOfferByIdQuery, GetOfferByIdQueryVariables>(
    GetOfferByIdDocument,
    options
  )
}
export function useGetOfferByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetOfferByIdQuery,
        GetOfferByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetOfferByIdQuery, GetOfferByIdQueryVariables>(
    GetOfferByIdDocument,
    options
  )
}
export type GetOfferByIdQueryHookResult = ReturnType<
  typeof useGetOfferByIdQuery
>
export type GetOfferByIdLazyQueryHookResult = ReturnType<
  typeof useGetOfferByIdLazyQuery
>
export type GetOfferByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetOfferByIdSuspenseQuery
>
export type GetOfferByIdQueryResult = Apollo.QueryResult<
  GetOfferByIdQuery,
  GetOfferByIdQueryVariables
>
export const GetUserByIdDocument = gql`
  query GetUserById($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      email
      role
      avatar_url
      username
    }
  }
`

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  > &
    (
      | { variables: GetUserByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  )
}
export function useGetUserByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserByIdQuery,
    GetUserByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  )
}
export function useGetUserByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetUserByIdQuery,
        GetUserByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(
    GetUserByIdDocument,
    options
  )
}
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>
export type GetUserByIdLazyQueryHookResult = ReturnType<
  typeof useGetUserByIdLazyQuery
>
export type GetUserByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetUserByIdSuspenseQuery
>
export type GetUserByIdQueryResult = Apollo.QueryResult<
  GetUserByIdQuery,
  GetUserByIdQueryVariables
>
export const GetMenuDocument = gql`
  query GetMenu {
    menu_items {
      id
      category_id
      name
      description
      ingredients
      price
      calories
      allergens
      image_url
      is_available
      created_at
      updated_at
    }
  }
`

/**
 * __useGetMenuQuery__
 *
 * To run a query within a React component, call `useGetMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMenuQuery(
  baseOptions?: Apollo.QueryHookOptions<GetMenuQuery, GetMenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    options
  )
}
export function useGetMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetMenuQuery, GetMenuQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    options
  )
}
export function useGetMenuSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetMenuQuery, GetMenuQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    options
  )
}
export type GetMenuQueryHookResult = ReturnType<typeof useGetMenuQuery>
export type GetMenuLazyQueryHookResult = ReturnType<typeof useGetMenuLazyQuery>
export type GetMenuSuspenseQueryHookResult = ReturnType<
  typeof useGetMenuSuspenseQuery
>
export type GetMenuQueryResult = Apollo.QueryResult<
  GetMenuQuery,
  GetMenuQueryVariables
>
export const GetMenuItemByIdDocument = gql`
  query GetMenuItemById($id: uuid!) {
    menu_items_by_pk(id: $id) {
      id
      category_id
      name
      description
      ingredients
      price
      calories
      allergens
      image_url
      is_available
      created_at
      updated_at
    }
  }
`

/**
 * __useGetMenuItemByIdQuery__
 *
 * To run a query within a React component, call `useGetMenuItemByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuItemByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuItemByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMenuItemByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetMenuItemByIdQuery,
    GetMenuItemByIdQueryVariables
  > &
    (
      | { variables: GetMenuItemByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMenuItemByIdQuery, GetMenuItemByIdQueryVariables>(
    GetMenuItemByIdDocument,
    options
  )
}
export function useGetMenuItemByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMenuItemByIdQuery,
    GetMenuItemByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetMenuItemByIdQuery,
    GetMenuItemByIdQueryVariables
  >(GetMenuItemByIdDocument, options)
}
export function useGetMenuItemByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetMenuItemByIdQuery,
        GetMenuItemByIdQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetMenuItemByIdQuery,
    GetMenuItemByIdQueryVariables
  >(GetMenuItemByIdDocument, options)
}
export type GetMenuItemByIdQueryHookResult = ReturnType<
  typeof useGetMenuItemByIdQuery
>
export type GetMenuItemByIdLazyQueryHookResult = ReturnType<
  typeof useGetMenuItemByIdLazyQuery
>
export type GetMenuItemByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetMenuItemByIdSuspenseQuery
>
export type GetMenuItemByIdQueryResult = Apollo.QueryResult<
  GetMenuItemByIdQuery,
  GetMenuItemByIdQueryVariables
>
export const GetMenuCategoriesDocument = gql`
  query GetMenuCategories {
    menu_categories {
      id
      name
      description
      image_url
      created_at
    }
  }
`

/**
 * __useGetMenuCategoriesQuery__
 *
 * To run a query within a React component, call `useGetMenuCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMenuCategoriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMenuCategoriesQuery,
    GetMenuCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetMenuCategoriesQuery,
    GetMenuCategoriesQueryVariables
  >(GetMenuCategoriesDocument, options)
}
export function useGetMenuCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMenuCategoriesQuery,
    GetMenuCategoriesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetMenuCategoriesQuery,
    GetMenuCategoriesQueryVariables
  >(GetMenuCategoriesDocument, options)
}
export function useGetMenuCategoriesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetMenuCategoriesQuery,
        GetMenuCategoriesQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetMenuCategoriesQuery,
    GetMenuCategoriesQueryVariables
  >(GetMenuCategoriesDocument, options)
}
export type GetMenuCategoriesQueryHookResult = ReturnType<
  typeof useGetMenuCategoriesQuery
>
export type GetMenuCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetMenuCategoriesLazyQuery
>
export type GetMenuCategoriesSuspenseQueryHookResult = ReturnType<
  typeof useGetMenuCategoriesSuspenseQuery
>
export type GetMenuCategoriesQueryResult = Apollo.QueryResult<
  GetMenuCategoriesQuery,
  GetMenuCategoriesQueryVariables
>
export const GetOrdersDocument = gql`
  query GetOrders {
    orders {
      id
      user_id
      total_amount
      status
      payment_status
      delivery_address
      delivery_instructions
      created_at
      updated_at
    }
  }
`

/**
 * __useGetOrdersQuery__
 *
 * To run a query within a React component, call `useGetOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetOrdersQuery, GetOrdersQueryVariables>(
    GetOrdersDocument,
    options
  )
}
export function useGetOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOrdersQuery,
    GetOrdersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetOrdersQuery, GetOrdersQueryVariables>(
    GetOrdersDocument,
    options
  )
}
export function useGetOrdersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetOrdersQuery, GetOrdersQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetOrdersQuery, GetOrdersQueryVariables>(
    GetOrdersDocument,
    options
  )
}
export type GetOrdersQueryHookResult = ReturnType<typeof useGetOrdersQuery>
export type GetOrdersLazyQueryHookResult = ReturnType<
  typeof useGetOrdersLazyQuery
>
export type GetOrdersSuspenseQueryHookResult = ReturnType<
  typeof useGetOrdersSuspenseQuery
>
export type GetOrdersQueryResult = Apollo.QueryResult<
  GetOrdersQuery,
  GetOrdersQueryVariables
>
export const SearchMenuDocument = gql`
  query SearchMenu($search: String!) {
    menu_items(
      where: {
        _or: [
          { name: { _ilike: $search } }
          { description: { _ilike: $search } }
          { ingredients: { _ilike: $search } }
        ]
      }
      order_by: { name: asc }
    ) {
      id
      name
      description
      price
      category_id
      image_url
      is_available
    }
  }
`

/**
 * __useSearchMenuQuery__
 *
 * To run a query within a React component, call `useSearchMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchMenuQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchMenuQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchMenuQuery,
    SearchMenuQueryVariables
  > &
    (
      | { variables: SearchMenuQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchMenuQuery, SearchMenuQueryVariables>(
    SearchMenuDocument,
    options
  )
}
export function useSearchMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchMenuQuery,
    SearchMenuQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SearchMenuQuery, SearchMenuQueryVariables>(
    SearchMenuDocument,
    options
  )
}
export function useSearchMenuSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<SearchMenuQuery, SearchMenuQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<SearchMenuQuery, SearchMenuQueryVariables>(
    SearchMenuDocument,
    options
  )
}
export type SearchMenuQueryHookResult = ReturnType<typeof useSearchMenuQuery>
export type SearchMenuLazyQueryHookResult = ReturnType<
  typeof useSearchMenuLazyQuery
>
export type SearchMenuSuspenseQueryHookResult = ReturnType<
  typeof useSearchMenuSuspenseQuery
>
export type SearchMenuQueryResult = Apollo.QueryResult<
  SearchMenuQuery,
  SearchMenuQueryVariables
>
export const GetSpecialOffersDocument = gql`
  query GetSpecialOffers {
    special_offers {
      id
      title
      discount_price
      banner_image
      menu_item {
        id
        name
        price
        description
        image_url
        is_available
      }
    }
  }
`

/**
 * __useGetSpecialOffersQuery__
 *
 * To run a query within a React component, call `useGetSpecialOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSpecialOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSpecialOffersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSpecialOffersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetSpecialOffersQuery,
    GetSpecialOffersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetSpecialOffersQuery, GetSpecialOffersQueryVariables>(
    GetSpecialOffersDocument,
    options
  )
}
export function useGetSpecialOffersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSpecialOffersQuery,
    GetSpecialOffersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetSpecialOffersQuery,
    GetSpecialOffersQueryVariables
  >(GetSpecialOffersDocument, options)
}
export function useGetSpecialOffersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetSpecialOffersQuery,
        GetSpecialOffersQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetSpecialOffersQuery,
    GetSpecialOffersQueryVariables
  >(GetSpecialOffersDocument, options)
}
export type GetSpecialOffersQueryHookResult = ReturnType<
  typeof useGetSpecialOffersQuery
>
export type GetSpecialOffersLazyQueryHookResult = ReturnType<
  typeof useGetSpecialOffersLazyQuery
>
export type GetSpecialOffersSuspenseQueryHookResult = ReturnType<
  typeof useGetSpecialOffersSuspenseQuery
>
export type GetSpecialOffersQueryResult = Apollo.QueryResult<
  GetSpecialOffersQuery,
  GetSpecialOffersQueryVariables
>
export const GetLiveOrdersDocument = gql`
  subscription GetLiveOrders {
    orders {
      id
      user_id
      total_amount
      status
      payment_status
      delivery_address
      delivery_instructions
      created_at
      updated_at
    }
  }
`

/**
 * __useGetLiveOrdersSubscription__
 *
 * To run a query within a React component, call `useGetLiveOrdersSubscription` and pass it any options that fit your needs.
 * When your component renders, `useGetLiveOrdersSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLiveOrdersSubscription({
 *   variables: {
 *   },
 * });
 */
export function useGetLiveOrdersSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    GetLiveOrdersSubscription,
    GetLiveOrdersSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSubscription<
    GetLiveOrdersSubscription,
    GetLiveOrdersSubscriptionVariables
  >(GetLiveOrdersDocument, options)
}
export type GetLiveOrdersSubscriptionHookResult = ReturnType<
  typeof useGetLiveOrdersSubscription
>
export type GetLiveOrdersSubscriptionResult =
  Apollo.SubscriptionResult<GetLiveOrdersSubscription>
