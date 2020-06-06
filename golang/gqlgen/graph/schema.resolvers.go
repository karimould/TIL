package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/karimould/TIL/graph/generated"
	"github.com/karimould/TIL/graph/model"
)

func (r *mutationResolver) CreateTweet(ctx context.Context, input model.NewTweet) (*model.User, error) {
	var user *model.User
	user = &model.User{ID: 1, Name: "Karim", Tweet: &model.Tweet{ID: input.ID, Text: input.Text}}
	return user, nil
}

func (r *queryResolver) User(ctx context.Context) ([]*model.User, error) {
	var user []*model.User
	user = append(user, &model.User{ID: 1, Name: "Karim", Tweet: &model.Tweet{ID: 1, Text: "first tweet"}})
	return user, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
