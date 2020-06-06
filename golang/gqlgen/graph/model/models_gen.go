// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type NewTweet struct {
	ID   int    `json:"id"`
	Text string `json:"text"`
}

type Tweet struct {
	ID   int    `json:"id"`
	Text string `json:"text"`
}

type User struct {
	ID    int    `json:"id"`
	Name  string `json:"name"`
	Tweet *Tweet `json:"tweet"`
}
